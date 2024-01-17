
/* KARTE */

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
      imageIcon: "img/karton_icon.png", //MULTI
      content: `<h3>Multisammelstelle Industriestrasse</h3>`
    },

    {
      location:{lat: 46.85101329014681, lng: 9.537040027852614},
      imageIcon: "img/karton_icon.png", //MULTI
      content: `<h3>Multisammelstelle Reichsgasse</h3>` 
    },

    {
      location:{lat: 46.858795809657344, lng: 9.55139307616712},
      imageIcon: "img/karton_icon.png", //ALU, GLAS
      content: `<h3>Plantaweg 2A</h3>` 
    },

    {
      location:{lat: 46.856005288780864, lng: 9.525947605871954},
      imageIcon: "img/karton_icon.png", //ALU, GLAS
      content: `<h3>Scalettastrasse 33</h3>` 
    },

    {
      location:{lat: 46.856005288780864, lng: 9.525947605871954},
      imageIcon: "img/karton_icon.png", //ALU, GLAS
      content: `<h3>Scalettastrasse 33</h3>` 
    },

    {
      location:{lat: 46.86224196212597, lng: 9.546247015719848},
      imageIcon: "img/karton_icon.png", //PET, PLASTIK
      content: `<h3>LIDL Wiesentalstrasse 98</h3>` 
    },

    {
      location:{lat: 46.84641800975893, lng: 9.51320368714983},
      imageIcon: "img/karton_icon.png", //PET, ALU
      content: `<h3>Coop Pronto Spundistrasse 11</h3>` 
    },

    {
      location:{lat: 46.853031193249976, lng: 9.533012965068997},
      imageIcon: "img/karton_icon.png", //PET
      content: `<h3>Coop City Alexanderstrasse 8</h3>` 
    },

    {
      location:{lat: 46.852129757476995, lng: 9.532290060089935},
      imageIcon: "img/karton_icon.png", //PET
      content: `<h3>Kiosk Quaderstrasse 2</h3>` 
    },
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
  
  marker.addListener("click", () =>{
      detailWindow.open(map, marker);
  })
}

       



  }

  



}

/* ZITATE KAROUSEL */

const carouselItems = document.querySelectorAll(".carousel_item"); 
let i = 1;

setInterval(() => {
// Accessing All the carousel Items
carouselItems.forEach((item) => {

   if(i < carouselItems.length){
    item.style.transform = `translateX(-${i*100}%)`
   }
  })


  if(i < carouselItems.length){
    i++;
  } else{
    i=0;
  }
}, 5000);