import { Link, useLocation, useParams } from 'react-router-dom'

import React from 'react'

// Yan menü bileşeni
const Sidebar = () => {
	const { pathname } = useLocation() // Mevcut sayfanın yolu
	const params = useParams() // Mevcut sayfanın parametreleri

	return (
		<div className="d-flex flex-column flex-shrink-0 bg-black h-100 main-bar-sidebart" style={{ width: '4.5rem' }}>
			<a
				href="/"
				className="d-block m-auto link-dark text-decoration-none mt-4"
				title=""
				data-bs-toggle="tooltip"
				data-bs-placement="right"
				data-bs-original-title="Icon-only"
			>
				<Logo />
			</a>
			<div className="h-100 d-flex">
				<ul className="nav nav-pills nav-flush m-auto flex-column text-center h-50 justify-content-around main-bar-menu">
					{/* Eğer mevcut sayfa anasayfa ise, o sayfaya kaydırma işlemi yapılır */}
					<li className="nav-item">
						<Link to="/">
							<Home color={pathname === '/' ? '#0B60B0' : '#F0EDCF'} />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Map/restaurants">
							<Rest color={params.id === 'restaurants' ? '#0B60B0' : '#F0EDCF'} />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Map/hotels">
							<Hotel color={params.id === 'hotels' ? '#0B60B0' : '#F0EDCF'} />
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/Map/attractions">
							<Ent color={params.id === 'attractions' ? '#0B60B0' : '#F0EDCF'} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar

// Home, Rest, Hotel, Ent ve Logo gibi SVG bileşenleri
const Home = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill={color}
			className="bi bi-house-door-fill"
			viewBox="0 0 16 16"
		>
			<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
		</svg>
	)
}

const Rest = ({ color }) => {
	return (
		<svg viewBox="0 0 24 24" fill={color} height="25" width="25">
			<path d="M1 22c0 .54.45 1 1 1h13c.56 0 1-.46 1-1v-1H1v1M8.5 9C4.75 9 1 11 1 15h15c0-4-3.75-6-7.5-6m-4.88 4c1.11-1.55 3.47-2 4.88-2s3.77.45 4.88 2H3.62M1 17h15v2H1v-2M18 5V1h-2v4h-5l.23 2h9.56l-1.4 14H18v2h1.72c.84 0 1.53-.65 1.63-1.47L23 5h-5z" />
		</svg>
	)
}

const Hotel = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill={color}
			className="bi bi-house-heart-fill"
			viewBox="0 0 16 16"
		>
			<path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707L7.293 1.5Z" />
			<path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9.293Zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
		</svg>
	)
}

const Ent = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill={color}
			className="bi bi-emoji-smile-fill"
			viewBox="0 0 16 16"
		>
			<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
		</svg>
	)
}

const Logo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			fill="#0B60B0"
			className="bi bi-compass-fill"
			viewBox="0 0 16 16"
		>
			<path d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z" />
		</svg>
	)
}
