function initMap(){

  var options = {
    center: { lat: 46.851949140622025, lng: 9.53223487821476 },
    zoom: 14
   }

   map =new google.maps.Map(document.getElementById('map'), options);

//Marker

const marker = new google.maps.Marker({
  position: { lat: 46.85719987945518, lng: 9.518000876366889 },
  map: map,
  icon: "img/glas_icon.png" 
});

//Info-Fenster

  const detailWindow = new google.maps.InfoWindow({
    content: '<h2>Recyclinghof</h2>'
  });

  marker.addListener('click', () => {
    detailWindow.open(map, marker);
  })

  }