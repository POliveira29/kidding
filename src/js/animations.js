gsap.registerPlugin(ScrollTrigger);

/*gsap.to(".who__img", {
  scrollTrigger: {
    trigger: ".who__img",
    toggleActions: "restart none none none",
  },
  duration: 4,
  x: 500,
});
*/
gsap.to(".who__img", {
  scrollTrigger: {
    trigger: ".who__img",
    start: "10px",
    toggleActions: "restart pause reverse resume",
  },
  x: 500,
  duration: 3,
  /*transformOrigin: "right center",
  ease: "none",*/
});
