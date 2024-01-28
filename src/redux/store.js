import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

// Redux store'unun yapılandırılması
export const reduxStore = configureStore({
	reducer: {
		pageData: reducer
	}
})
