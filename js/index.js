const menu = document.querySelector(".menu-js")
const navLinks = document.querySelector(".nav-js")
const links = document.querySelectorAll(".links-nav-js")

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

document.body.onclik = function() {
  navLinks.classList.remove("open")
}

// evento para que cierre el menu hamburguesa al clikear un link
links.forEach(link => link.addEventListener("click", ()=>{ navLinks.classList.remove("open"); }))


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
