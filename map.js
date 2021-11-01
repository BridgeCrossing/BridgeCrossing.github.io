var map = L.map('map', {
  minZoom: 3
}).setView([37.0902, -95.7129], 2.5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var destinations = [
  {
    name: "Illinois",
    location: [40.6331, -89.3985],
    url: "#"
  },
  // {
  //   name: "New York",
  //   location: [40.730610, -73.935242],
  //   url: "Destinations/NewYork.html"
  // },
  {
    name: "Washington",
    location: [47.7511, -120.7401],
    url: "Destinations/Countries/United_States/Washington.html"
  },
  // {
  //   name: "Taipei",
  //   location: [25.105497, 121.597366],
  //   url: "Destinations/Taipei.html"
  // },
  {
    name: "Iowa",
    location: [41.8780, -93.0977],
    url: "Destinations/Countries/United_States/Iowa.html"
  },
  {
    name: "Missouri",
    location: [37.9643, -91.8318],
    url: "Destinations/Countries/United_States/Missouri.html"
  }
];

for (var i = 0; i < destinations.length; i++) {
  marker = new L.marker(destinations[i].location)
    .bindPopup('<a href="' + destinations[i].url + '">'+ destinations[i].name)
    .addTo(map);
}
