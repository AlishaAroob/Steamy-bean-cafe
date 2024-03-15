const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector("next");

let slideIndex = 0;

let previous = document.getElementById("prev");
previous.addEventListener("click", () => {
  slideIndex = slideIndex - 1;
  //   slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  //   slider.style.transform = `translateX(${slideIndex * -100}%)`;
  slider.style.transform = "translateX(-100%)";
});

let nextt = document.getElementById("next");
nextt.addEventListener("click", () => {
  slideIndex = slideIndex + 1;
  // slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
  //   slider.style.transform = `translateX(${slideIndex * -100}%)`;
  slider.style.transform = "translateX(-100%)";
});

// let swiper = document.getElementsByClassName("slide");
// console.log(swiper);
// slide[0].style.background = "yellow";
// let slides = document.getElementsByClassName("slide");
// console.log(slides);
// slide[1].style.transform = "translateX(-100px)";

// let nextt = document.getElementById("next");
// console.log(nextt);
// nextt.style.background = "green";

// let slidenumber = 1;
// nextt.addEventListener(click, () => {
//   slides.style.transform = `transformX(-${slidenumber * 500}px)`;
//   slidenumber++;
// });

// let flag = 1;
// function click(x) {
//   flag = flag + x;
//   slideshow(flag);
// }

// slideshow(flag);

// function slideshow(num) {
//   let slides = document.getElementsByClassName("slide");
//   console.log(slides);
//   slides[num].style.display = "block";
// }
