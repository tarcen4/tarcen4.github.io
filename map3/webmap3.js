let nola = L.map('webmap3').setView([30.02, -89.9], 11);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(nola);
let nolaDemographicsUrl = 'https://opendata.arcgis.com/datasets/4593a994e7644bcc91d9e1c096df1734_0.geojson';
jQuery.getJSON(nolaDemographicsUrl, function (data) {
  let stateStyle = { color: 'purple' }
  let nolaGeojsonOptions = { style: stateStyle }
  L.geoJSON(data, nolaGeojsonOptions).addTo(nola)
})
