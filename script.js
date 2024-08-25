const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemCont = document.querySelector("#elem-container");
var fixedImage = document.querySelector("#fixed-image");

function page4Animation(){
    elemCont.addEventListener("mouseenter", function(){
        fixedImage.style.display = "block";
    });
    elemCont.addEventListener("mouseleave", function(){
        fixedImage.style.display = "none";
    });
    
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`;
        });
    });
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
      });
    };

    swiperAnimation();
    page4Animation();