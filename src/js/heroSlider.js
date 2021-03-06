/* Progress Bar Slider */

$(document).ready(function () {
  var time = 2;
  var $bar, $slick, isPause, tick, percentTime;

  $slick = $(".js-hero__carousel");
  $slick.slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    speed: 1200,
  });

  $bar = $(".js-progressbar .bar");

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 30);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / (time + 0.05);
      $bar.css({
        width: percentTime + "%",
      });
      if (percentTime >= 100) {
        $slick.slick("slickNext");
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $bar.css({
      width: 0 + "%",
    });
    clearTimeout(tick);
  }

  startProgressbar();

  $(".slick-dots").click(function () {
    startProgressbar();
  });
});

/*
$(document).ready(function () {
  var time = 7; // time in seconds

  var $progressBar, $bar, $elem, isPause, tick, percentTime;

  //Init the carousel
  $("#hero__carousel").owlCarousel({
    slideSpeed: 500,
    paginationSpeed: 500,
    singleItem: true,
    afterInit: progressBar,
    afterMove: moved,
    startDragging: pauseOnDragging,
  });

  //Init progressBar where elem is $("#owl-demo")
  function progressBar(elem) {
    $elem = elem;
    //build progress bar elements
    buildProgressBar();
    //start counting
    start();
  }

  //create div#progressBar and div#bar then prepend to $("#owl-demo")
  function buildProgressBar() {
    $progressBar = $("&lt;div&gt;", {
      id: "progressBar",
    });
    $bar = $("&lt;div&gt;", {
      id: "bar",
    });
    $progressBar.append($bar).prependTo($elem);
  }

  function start() {
    //reset timer
    percentTime = 0;
    isPause = false;
    //run interval every 0.01 second
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      percentTime += 1 / time;
      $bar.css({
        width: percentTime + "%",
      });
      //if percentTime is equal or greater than 100
      if (percentTime >= 100) {
        //slide to next item
        $elem.trigger("owl.next");
      }
    }
  }

  //pause while dragging
  function pauseOnDragging() {
    isPause = true;
  }

  //moved callback
  function moved() {
    //clear interval
    clearTimeout(tick);
    //start again
    start();
  }

  //uncomment this to make pause on mouseover
  // $elem.on('mouseover',function(){
  //   isPause = true;
  // })
  // $elem.on('mouseout',function(){
  //   isPause = false;
  // })
});
*/
