import GoogleMapReact from 'google-map-react'
import Place from './Place'
import React from 'react'

// harita bileşeni belirlenen lokasyonda yerler gösterir
const Map = ({ setBounds, userLocation, data, setChild }) => {
	// Harita stil seçeneklerini belirleyen yapı
	const mapOptions = {
		styles: [
			{
				featureType: 'all',
				elementType: 'all',
				stylers: [
					{ invert_lightness: 'true' },
					{ saturation: 10 },
					{ lightness: 30 },
					{ gamma: 0.5 },
					{ hue: '#435158' }
				]
			}
		]
	}

	return (
		<div className="w-100" style={{ height: '100vh' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
				defaultCenter={userLocation}
				center={userLocation}
				defaultZoom={11}
				margin={[50, 50, 50, 50]}
				options={mapOptions}
				onChange={(e) => {
					// Harita sınırlarını ayarlayan fonksiyon
					setBounds({
						sw: { lat: e.bounds.sw.lat, lng: e.bounds.sw.lng },
						ne: { lat: e.bounds.ne.lat, lng: e.bounds.ne.lng }
					})
				}}
				onChildClick={(e) => {
					// Harita üzerindeki çocuk bileşene tıklanınca tetiklenir
					setChild(e)
				}}
			>
				{data?.map((el, i) => {
					// Harita üzerindeki her yer için bir Place bileşeni oluşturur
					return <Place key={i} lat={el.latitude ? el.latitude : 0} lng={el.longitude ? el.longitude : 0} el={el} />
				})}
			</GoogleMapReact>
		</div>
	)
}

export default Map
