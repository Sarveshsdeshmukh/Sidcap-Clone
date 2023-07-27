// Jay shree ram
let cursor = document.querySelector("#cursor");
let cursorblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorblur.style.left = dets.x - 250 + "px";
  cursorblur.style.top = dets.y - 250 + "px";
});

let navH4 = document.querySelectorAll("#nav h4");

console.log(navH4);

navH4.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    cursor.style.scale = 4;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";
    elem.style.color = "#95c11e";
  });
  elem.addEventListener("mouseleave", () => {
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#95c11e";
    cursor.style.border = "0px solid #95c11e";
    elem.style.color = "#fff";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "12.5vh",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers : true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "main",
    scroller: "body",
    // markers : true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

// From and to are both same
gsap.from("#about-us-in , #about-us img", {
  y: 90,
  opacity: 0,
  duration: 1,
  // stagger : 3,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers : true
    start: "top 60%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity : 0,
  duration: 1,
  // stagger : 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers : true
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  y: -30,
  x: -30,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers : true
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 30,
  x: 30,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

// gsap.from("#page3 p", {
//   y: 70,
//   x: 70,
//   scrollTrigger: {
//     trigger: "#page3 p",
//     scroller: "body",
//     // markers:true,
//     start: "top 55%",
//     end: "top 45%",
//     scrub: 2,
//   },
// });

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers :  true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
