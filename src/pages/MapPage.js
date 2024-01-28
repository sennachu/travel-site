import { List, Map, Sidebar } from '../components'
import React, { useEffect, useState } from 'react'
import { fetchCity, fetchData } from '../api'
import { setCurrentPage, setPageData, setUserLocation } from '../redux/reducers'
import { useDispatch, useSelector } from 'react-redux'

import MainList from '../components/MainList'
import Pagination from '@mui/material/Pagination'
import useFilterHook from '../hooks/useFilterHook'
import { useParams } from 'react-router-dom'

const MapPage = () => {
	const dispatch = useDispatch()

	const userLocationFromState = useSelector((state) => state.pageData.userLocation)
	const pageDataFromState = useSelector((state) => state.pageData.pageData)
	const currentPageNumber = useSelector((state) => state.pageData.currentPage)
	const itemsPerPage = useSelector((state) => state.pageData.itemsPerPage)

	const startIndex = (currentPageNumber - 1) * itemsPerPage
	const currentPageData = pageDataFromState.slice(startIndex, startIndex + itemsPerPage)

	const [bounds, setBounds] = useState()
	const [child, setChild] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const params = useParams()

	const [rating, setFilterRating] = useState([])
	const [price, setFilterPrice] = useState([])
	const [distance, setFilterDistance] = useState([])

	const [placeName, setPlaceName] = useState('Istanbul')

	const url = `https://travel-advisor.p.rapidapi.com/${params.id}/list-in-boundary`

	const [newData, setNewData] = useFilterHook(currentPageData, rating, distance, price)

	useEffect(() => {
		setIsLoading(true)
		if (placeName) {
			fetchCity(placeName)
				.then((res) => {
					dispatch(setUserLocation(res.data.results[0].geometry))
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			navigator.geolocation.getCurrentPosition((position) => {
				dispatch(
					setUserLocation({
						lat: position.coords.latitude,
						lng: position.coords.longitude
					})
				)
			})
		}
	}, [dispatch, placeName, url])

	useEffect(() => {
		if (userLocationFromState && bounds) {
			setIsLoading(true)
			fetchData(url, bounds)
				.then((res) => {
					setIsLoading(false)
					setNewData([])
					dispatch(setUserLocation(null))
					dispatch(setPageData(res.data.data))
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [url, bounds, userLocationFromState, dispatch, setNewData])

	const handlePageChange = (_e, page) => dispatch(setCurrentPage(page))

	return (
		<main className="d-flex main-bar">
			<section className="shadow main-bar-section">
				<Sidebar />
			</section>
			<section className="w-100">
				<Map
					setBounds={setBounds}
					userLocation={userLocationFromState}
					data={newData?.length ? newData : currentPageData}
					setChild={setChild}
				/>
			</section>
			<section className="shadow" style={{ backgroundColor: '#f5f5f5' }}>
				<MainList
					filter={{
						setFilterRating,
						setFilterPrice,
						setFilterDistance,
						setPlaceName
					}}
				/>
				<div className="d-flex justify-content-center align-items-center p-2" style={{ backgroundColor: '#f5f5f5' }}>
					<Pagination
						count={pageDataFromState.length ? Math.ceil(pageDataFromState.length / 6) : 1}
						variant="outlined"
						shape="rounded"
						onChange={handlePageChange}
					/>
				</div>
				<List data={newData?.length ? newData : currentPageData} isLoading={isLoading} child={child} />
			</section>
		</main>
	)
}

export default MapPage
