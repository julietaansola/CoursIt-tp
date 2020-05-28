


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
