$(document).ready(function () {
  /* Verifica quando a distancia da janela ao topo for maior que 1200 
    o botão aparece, se for menor desaparece.
  */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1200) {
      $(".btn-back-to-top").fadeIn();
      $(".btn-back-to-top").css("display", "flex");
    } else {
      $(".btn-back-to-top").fadeOut();
    }
  });

  //Evento de clique para voltar ao topo
  $(".btn-back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
