let Louisiana = L.map('webmap').setView([31, -92], 8)
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png').addTo(Louisiana)
let LSU = L.marker([30.4133, -91.1800]).addTo(Louisiana)
let Baton_Rouge = L.polygon([
  [30.511415, -91.174133],
  [30.473722, -91.057859],
  [30.351835, -91.048093],
  [30.388899, -91.209385]
]).addTo(Louisiana);

var latlngs = [
    [30.53, -91.2],
    [30.67, -91.43],
    [30.04, -91.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(Louisiana);

Baton_Rouge.bindPopup('A polygon');
LSU.bindPopup('A marker');
polyline.bindPopup('A polyline');
