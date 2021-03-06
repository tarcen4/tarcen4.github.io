let usa = L.map('webmap2').setView([38, -100], 4.4);
L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(usa);
L.tileLayer.wms('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/mrms_nn.cgi?', {
  layers: 'mrms_p72h',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(usa)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/guidance_model_coastalocean_estofs_time/MapServer/WMSServer', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(usa);
