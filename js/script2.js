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
},5000)