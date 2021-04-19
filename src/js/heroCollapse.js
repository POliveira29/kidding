var menu = document.querySelector(".hero__menu");
menu.addEventListener("click", function () {
  document.getElementById("btn-menu").classList.toggle("hero__nav--active");
  document.getElementById("navbar").classList.toggle("hero__nav--active");
  document.getElementById("body").classList.toggle("u-scroll--disabled");
});
