import axios from 'axios';

// Belirli bir URL'den veri çeken fonksiyon
export const fetchData = (url, { sw, ne }) => {
    return axios({
        method: 'GET',
        url: url,
        params: {
            // API'ye gönderilecek parametreler
            bl_latitude: sw.lat, // Güneybatı enlem
            tr_latitude: ne.lat, // Kuzeydoğu enlem
            bl_longitude: sw.lng, // Güneybatı boylam
            tr_longitude: ne.lng // Kuzeydoğu boylam
        },
        headers: {
            'X-RapidAPI-Key': '03779e5efamsh4cce68d36fe0272p11a0b0jsn429f2d87e495', // RapidAPI anahtarı
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com' // RapidAPI ana bilgisayarı
        }
    })
        .then((res) => res) // Başarılı yanıtı döndür
        .catch((err) => {
            console.error('Hata', err); // Hata durumunda konsola hata mesajını yazdır
        });
};

// Bir şehrin verilerini çeken fonksiyon
export const fetchCity = (placeName) => {
    return axios({
        method: 'GET',
        url: `https://api.opencagedata.com/geocode/v1/json?&key=${process.env.REACT_APP_CITY_KEY}`, // Verilen şehrin bilgilerini çeken API'nin URL'si
        params: { q: placeName } // Sorgu parametresi, aranan yerin adı
    })
        .then((res) => res) // Başarılı yanıtı döndür
        .catch((err) => {
            console.error(err); // Hata durumunda konsola hata mesajını yazdır
        });
};
