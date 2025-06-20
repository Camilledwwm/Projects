// Afficher la map
let map = document.getElementById('map');
let popup = L.popup();

map = L.map('map', {
  center: [51.505, -0.09],
  zoom: 7
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
console.log(map);

// Afficher une popup avec latitude et longitude au click sur la map
function onMapClick() {
  map.addEventListener('click', (event) => {
    let lat = event.latlng.lat.toFixed(6); // 6 décimales
    let lng = event.latlng.lng.toFixed(6); // 6 décimales
    popup.setLatLng(event.latlng);
    popup.setContent(`latitude ${lat} et longitude ${lng}`);
    popup.openOn(map);
  });
}

onMapClick();
