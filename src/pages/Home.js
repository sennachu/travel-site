import '../App.css'
import React from 'react'
import Sidebar2 from '../components/Siderbar2'

// Ana sayfa bileşeni
const Home = () => {
	return (
		<div className="vh-100 d-flex">
			<div>
				<Sidebar2 />
			</div>
			<div
				id="carouselExampleDark"
				className="carousel carousel-dark slide w-100 h-100"
				data-bs-ride="carousel"
				data-bs-interval="false"
				data-pause="hover"
			>
				<div className="carousel-inner h-100">
					{/* Carousel içindeki her öğe */}
					<CarouselItem imageUrl="/s3.jpg"/>
					<CarouselItem imageUrl="/s.jpg" />
				</div>
			</div>
		</div>
	)
}

export default Home

// Carousel öğesi için yardımcı bileşen
const CarouselItem = ({imageUrl}) => {
	return (
		<div className="carousel-item active">
			<div
				className="d-flex align-items-center"
				style={{
					backgroundImage: `url(${imageUrl})`,
					height: '100vh',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center'
				}}
			>
			</div>
		</div>
	)
}
