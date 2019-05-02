let ebr = L.map('webmap3').setView([30.52, -91.095644], 10);
let basemap = 'https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png';
L.tileLayer(basemap).addTo(ebr);
let ebrDemographicsUrl = 'https://opendata.arcgis.com/datasets/d7a7c859cb464d699e77619416528e2a_0.geojson';
jQuery.getJSON(ebrDemographicsUrl, function (data) {
  let wardStyle = function (feature) {
    let ward = feature.properties.WARD
    let wardColor = 'blue'
    if ( ward=='1'  ) { wardColor = '#00447b' }
    else if ( ward=='2'  ) { wardColor = '#de4429' }
    else { wardColor = '#757575' }
    return {
      color: wardColor,
      weight: 1.5,
      fillOpacity: 0.3
    }
  }
    let onEachFeature = function (feature, layer) {
      let vprecinct = feature.properties.VOTING_PRECINCT_NAME
      let ward = feature.properties.WARD
      let precinct = feature.properties.PRECINCT
      let totpop = feature.properties.TOTAL_POPULATION
      let wpop = feature.properties.WHITE_POPULATION
      let bpop = feature.properties.BLACK_POPULATION
      let opop = feature.properties.OTHER_POPULATION
      let mc = feature.properties.METRO_COUNCIL
      let cd = feature.properties.US_HOUSE
      let psc = feature.properties.PSC
      let bese = feature.properties.BESE
      let lahouse = feature.properties.LA_HOUSE
      let lasenate = feature.properties.LA_SENATE
      layer.bindPopup('Voting Precinct: ' + vprecinct + '<br>Ward: ' + ward + '<br>Precinct: ' + precinct + '<br>Total Population: ' + totpop + '<br>White Population: ' + wpop + '<br>Black Population: ' + bpop + '<br>Other Population: ' + opop + '<br>Metro Council: ' + mc + '<br>US Congressional District: ' + cd + '<br>Public Service Commission: ' + psc + '<br>BESE District: ' + bese + '<br>LA House District: ' + lahouse + '<br>LA Senate District: ' + lasenate)
  }
  let wardGeojsonOptions = {
    style: wardStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, wardGeojsonOptions).addTo(ebr)
})
