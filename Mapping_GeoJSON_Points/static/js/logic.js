// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// // Grabbing our GeoJSON data - POINT TO LAYER METHOD
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     console.log(latlng);
//     return L.marker(latlng)
//     .bindPopup('<h2>' + feature.properties.city + '</h2> <hr> <p>' + feature.properties.name + '</p>')
//   } 
// }).addTo(map);

// Grabbing our GeoJSON data - ON EACH FEATURE METHOD
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map
  onEachFeature: function(feature, layer) {
    console.log(feature);
    console.log(layer);
    layer.bindPopup();
  }
  
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

