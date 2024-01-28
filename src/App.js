import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import MapPage from './pages/MapPage'
import { Provider } from 'react-redux'
import React from 'react'
import { reduxStore } from './redux/store'

const App = () => {
	return (
		<Provider store={reduxStore}>
			{/* Redux store'unu uygulamaya sağlamak için Provider */}
			<Router>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/Map/:id" element={<MapPage />}></Route>
				</Routes>
			</Router>
		</Provider>
	)
}

export default App
