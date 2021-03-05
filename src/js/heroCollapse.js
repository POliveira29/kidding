/*$(document).ready(function () {
  $(".hero__menu").click(function () {
    if ($(".hero__nav").hasClass("hero__nav--active")) {
      $(".hero__nav").removeClass("hero__nav--active");
    } else {
      $(".hero__nav").addClass("hero__nav--active");
    }
  });
});*/

var menu = document.querySelector(".hero__menu");
menu.addEventListener("click", function () {
  document.getElementById("btn-menu").classList.toggle("hero__nav--active");
  document.getElementById("navbar").classList.toggle("hero__nav--active");
  document.getElementById("body").classList.toggle("u-scroll--disabled");
});
