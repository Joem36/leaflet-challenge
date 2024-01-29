let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 7
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
  
  d3.json(url).then(function(response) {
  
    //console.log(response);
    features = response.features;
  
    
  
    for (let i = 0; i < features.length; i++) {
       let geometry = features[i].geometry.coordinates;
       let mag = features[i].properties.mag * 10000;
       console.log(mag);
       L.circle([geometry[1],geometry[0]],{radius: mag, color: "green"}).addTo(myMap);
       if (geometry) {
        
       }
  
     }
  
  
   });