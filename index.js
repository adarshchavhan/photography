setTimeout(function(){
   let div = document.querySelectorAll(".contain");
   let loader = document.querySelector(".loader");

   div.forEach(function(element){
      element.style.opacity = 1;
      element.style.display = "flex";
   });
   loader.style.opacity = 1;
   loader.style.display = "none";

},1000);

window.onscroll = function(){
   // Sroll To Top Btn
   const header = document.querySelector(".header");
   const scrollBtn = document.querySelector(".scroll-btn");
   if(scrollY >= innerHeight-67){
      scrollBtn.style.bottom = '20px';
   }else{
      scrollBtn.style.bottom = '-50px';
   }

   // Sticky Header
   if(scrollY > 1){
      header.classList.add("sticky");
   }else{
      header.classList.remove("sticky");
   }

   // Reveling Element on Scroll
   const span = document.querySelectorAll(".span");
   span.forEach(function(element){
      let rect = element.getBoundingClientRect();
      if(rect.top <= innerHeight){
         element.style.opacity = 1;
         element.style.marginTop = 0;
      }else{
         element.style.opacity = 0;
         element.style.marginTop = "5px";
      }
   });

};

