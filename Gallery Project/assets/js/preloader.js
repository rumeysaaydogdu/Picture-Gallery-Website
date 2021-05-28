import gsap from "https://cdn.skypack.dev/gsap";

const timeline = gsap.timeline();

timeline.to(".gear", {
  rotation: 360,
  duration: 3,
  repeat: -1,
  ease: "linear"
});

timeline.to(
  ".svg3",
  {
    rotation: -360,
    duration: 3,
    repeat: -1,
    ease: "linear"
  },
  "-=3"
);
