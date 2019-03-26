let Louisiana = L.map('webmap').setView([31, -92], 8)
L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(Louisiana)
let LSU = L.marker([30.4133, -91.1800]).addTo(Louisiana)
let Baton_Rouge = L.polygon([
  [30.511415, -91.174133],
  [30.473722, -91.057859],
  [30.351835, -91.048093],
  [29.940348, -90.121340]
]).addTo(Louisiana);

var latlngs = [
    [30.413271, -91.180030],
    [30.067420, -91.481373],
    [30.04, -91.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(Louisiana);

Baton_Rouge.bindPopup('A polygon');
LSU.bindPopup('A marker');
polyline.bindPopup('A polyline');
