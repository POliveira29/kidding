$(document).ready(function () {
  $(".js-products__slide").slick({
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: $(".products__prev-arrow"),
    nextArrow: $(".products__next-arrow"),
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  });
});
