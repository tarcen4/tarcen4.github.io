let Louisiana = L.map('Louisiana').setView([31, -92], 3)
L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png').addTo(Louisiana)
let LSU = L.marker([30.4133, -91.1800]).addTo(Louisiana)
let polygon = L.polygon([
  [30.511415, -91.174133],
  [30.473722, -91.057859],
  [30.351835, -91.048093],
  [30.388899, -91.209385]
]).addTo(Louisiana);
Louisiana.bindPopup('A polygon')
Louisiana.bindPopup('A marker')
