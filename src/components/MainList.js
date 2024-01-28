import '../App.css'

import React from 'react'

// Ana liste ve arama barını içeren komponent
const MainList = ({ filter }) => {
	const { setPlaceName } = filter

	const submitHandler = (e) => {
		// Arama barı için submit işlemi
		e.preventDefault() // Sayfanın yenilenmesini engelle
		setPlaceName(e.target[0].value) // Arama çubuğundaki metni filtrelemek için setPlaceName fonksiyonunu çağır
	}

	return (
		<div>
			<div className="d-flex align-items-center py-3 px-4">
				<form className="d-flex justify-content-center align-itmes-center w-100 gap-3" onSubmit={submitHandler}>
					<input className="form-control" type="search" placeholder="Ara..." aria-label="Search" />
					<Search />
				</form>
			</div>
		</div>
	)
}

export default MainList

// Arama ikonu için komponent
const Search = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="25"
			height="25"
			fill="#4285F4"
			className="bi bi-search"
			viewBox="0 0 16 16"
			style={{ cursor: 'pointer' }}
		>
			<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
		</svg>
	)
}
