let usa = L.map('webmap3').setView([32.18, -99.14], 4);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(usa);
let stateDemographicsUrl = 'https://opendata.arcgis.com/datasets/931492aa51834f639a00a3bd32534113_0.geojson';
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(usa)
})
L.geoJSON(data, { style: { color: 'green' } }).addTo(usa);
