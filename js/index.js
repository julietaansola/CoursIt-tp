const menu = document.querySelector(".menu-js")
const navLinks = document.querySelector(".nav-js")


menu.addEventListener("click", () => {
  if (menu.style.display = "inline-block") {

    menu.classList.toggle("is-active")
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open")
    } else {
      navLinks.classList.add("open")
    }
  }
})



$(document).ready(function () {
  $(".series-carrousel").slick({
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    accesibility: true,
    arrows: true,
    responsive: [{
      breakpoint: 850,
      settings: {
        slidesToScroll: 1,
      }
    }]
  })
});



$(document).ready(function () {
  $(".series-carrousel-bb").slick({
    infinite: true,
    slidesToScroll: 2,
    variableWidth: true,
    accesibility: true,
    arrows: true,
    responsive: [
    {
      breakpoint: 600,
      settings: "unslick"
    },
   ]
  })
});
slickCarrousel()

$(window).resize(function(){
  if ($(window).width() > 600) {
      slickCarrousel();   
  }
});