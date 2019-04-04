let usa = L.map('webmap3').setView([32.18, -99.14], 4);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png'
L.tileLayer(basemap).addTo(usa);
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
