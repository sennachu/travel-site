import { useEffect, useState } from 'react'

// Filtreleme işlemleri için özel hook
const useFilterHook = (data, rating, distance, price) => {
	const [newData, setNewData] = useState([])

	useEffect(() => {
		if (rating) {
			const filteredByRating = data?.filter((el) => el.rating >= rating && el.rating <= rating + 1)
			setNewData(filteredByRating)
		}

		if (distance) {
			const filteredByDistance = data?.filter((el) => Number(el.distance) <= distance)
			setNewData(filteredByDistance)
		}
	}, [rating, distance, price, data])

	return [newData, setNewData]
}

export default useFilterHook
