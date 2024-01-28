import { createSlice } from '@reduxjs/toolkit'

// Redux için ana veri yönetimi slice'ı
const pageDataSlice = createSlice({
	name: 'pageData',
	initialState: {
		// Başlangıç durumu
		pageData: [],
		userLocation: null,
		currentPage: 1,
		itemsPerPage: 6
	},
	reducers: {
		setUserLocation: (state, action) => {
			// Redux state'indeki userLocation'ı güncelle
			state.userLocation = action.payload
		},
		setPageData: (state, action) => {
			// Redux state'indeki pageData'yı güncelle
			state.pageData = action.payload
		},
		setCurrentPage: (state, action) => {
			// Redux state'indeki currentPage'i güncelle
			state.currentPage = action.payload
		}
	}
})

export const { setUserLocation, setPageData, setCurrentPage } = pageDataSlice.actions

export default pageDataSlice.reducer
