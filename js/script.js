function initMap(){

  // Map option

  var options = {
      center: { lat: 46.851949140622025, lng: 9.53223487821476 },
      zoom: 14,
      mapId: "801170992c8617e7"
  }

  //New Map
  map = new google.maps.Map(document.getElementById("map"),options)

  //listen for click on map location

  google.maps.event.addListener(map, "click", (event) => {
      //add Marker
      addMarker({location:event.latLng});
  })

  //Add Markers to Array

  let MarkerArray = [ 
    
    {
      location:{lat: 46.85719987945518, lng: 9.518000876366889}, 
      imageIcon: "img/karton_icon.png",
      content: `<h3>Multisammelstelle Industriestrasse</h3>`
    },

    {
      location:{lat: 46.85101329014681, lng: 9.537040027852614},
      imageIcon: "img/glas_icon.png", 
      content: `<h3>Multisammelstelle Reichsgasse</h3>`
    },

    {
      location:{lat: 38.5411, lng: -0.1225},content: `<h2>Benidorm City</h2>`
    }



  ]

  // loop through marker
  for (let i = 0; i < MarkerArray.length; i++){
      addMarker(MarkerArray[i]);

  }

  // Add Marker

  function addMarker(property){

      const marker = new google.maps.Marker({
          position:property.location,
          map:map,
          //icon: property.imageIcon
          });

          // Check for custom Icon

          if(property.imageIcon){
              // set image icon
              marker.setIcon(property.imageIcon)
          }

          if(property.content){

          const detailWindow = new google.maps.InfoWindow({
          content: property.content
  });
  
  marker.addListener("mouseover", () =>{
      detailWindow.open(map, marker);
  })
}

       



  }

  



}