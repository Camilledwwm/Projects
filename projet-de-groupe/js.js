// Afficher la map
let map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 7
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Fonction au clic sur la carte
function onMapClick() {
  map.addEventListener('click', (event) => {
    let lat = event.latlng.lat.toFixed(6);
    let lng = event.latlng.lng.toFixed(6);

    // Obtenir la ville avec Nominatim
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        let ville = data.address.city || data.address.municipality;
        console.log('Ville :', ville);

        // Retourner la requête météo pour chaîner les .then
        return fetch(`https://goweather.xyz/weather/${ville}`);
      })
      .then((response) => response.json())
      .then((meteoData) => {
        let meteo = {
          temperature: meteoData.temperature,
          wind: meteoData.wind,
          description: meteoData.description
        };
        console.log('Météo :', meteo);
      })
      .catch((error) => {
        console.error('Erreur :', error);
      });
  });
}

onMapClick();
