let nola = L.map('webmap3').setView([30, -89.9], 12);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(nola);
let nolaDemographicsUrl = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson';
jQuery.getJSON(nolaDemographicsUrl, function (data) {
  let parkStyle = function (feature) {
    let council = feature.properties.COUNCIL
    let parkColor = 'purple'
    if ( council=='A'  ) { parkColor = 'teal' }
    return {
      color: parkColor,
      weight: 1.5,
      fillOpacity: 0.3
    }
  }
    let onEachFeature = function (feature, layer) {
      let name = feature.properties.NAME
      let street = feature.properties.STREET
      let neighborhood = feature.properties.NEGIHBORHOOD_NAME
      let council = feature.properties.COUNCIL
      layer.bindPopup('Name: ' + name + '<br>Street: ' + street + '<br>Neighborhood: ' + neighborhood + '<br>City Council District: ' + council)
  }
  let parksGeojsonOptions = {
    style: parkStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, parksGeojsonOptions).addTo(nola)
})
