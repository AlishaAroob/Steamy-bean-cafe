const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let slideIndex = 0;

let previous = document.getElementById("prev");
previous.addEventListener("click", () => {
  slideIndex = slideIndex <= 0 ? slides.length - 1 : slideIndex - 1;
  let slideWidth = `translateX(${slideIndex * -120}%)`;
  console.log("🚀 ~ previous.addEventListener ~ slideWidth:", slideWidth);
  slides.forEach((slide) => (slide.style.transform = slideWidth));
});

let nextt = document.getElementById("next");
nextt.addEventListener("click", () => {
  slideIndex = slideIndex >= slides.length - 1 ? 0 : slideIndex + 1;
  let slideWidth = `translateX(${slideIndex * -120}%)`;
  console.log("🚀 ~ next.addEventListener ~ slideWidth:", slideWidth);
  slides.forEach((slide) => (slide.style.transform = slideWidth));
});

const burger = document.querySelector("menu-icon");
const navbar = document.querySelector(".navbar");
const navbarlist = document.querySelector(".navbarlist");
const cart = document.querySelector(".bx-cart");
const search = document.querySelector(".btn");

let burgerr = document.getElementById("menu-icon");
burgerr.addEventListener("click", () => {
  navbarlist.classList.toggle("v-res");
  cart.classList.toggle("v-res");
  search.classList.toggle("v-res");
  navbar.classList.toggle("h-res");
});
