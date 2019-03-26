let Louisiana = L.map('webmap').setView([31, -92], 7)
L.tileLayer('https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png').addTo(Louisiana)
let LSU = L.marker([30.4133, -91.1800]).addTo(Louisiana)
let Baton_Rouge = L.polygon([
  [30.612821, -91.203405],
  [30.389945, -91.217228],
  [30.330510, -91.017672],
  [30.479040, -91.002912]
]).addTo(Louisiana);

var latlngs = [
    [30.4133, -91.1800],
    [30.648520, -91.156494],
    [30.865096, -91.015939]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(Louisiana);

Baton_Rouge.bindPopup('Baton Rouge');
LSU.bindPopup('LSU');
polyline.bindPopup('LSU to Clinton');
