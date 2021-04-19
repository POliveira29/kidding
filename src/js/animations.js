gsap.registerPlugin(ScrollTrigger);

gsap.to(".who__img", {
  scrollTrigger: {
    trigger: ".who__img",
    start: "10px",
    toggleActions: "restart pause reverse resume",
  },
  x: 500,
});
