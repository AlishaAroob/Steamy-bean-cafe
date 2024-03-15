const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next"); // Corrected selector

let slideIndex = 0;

let previous = document.getElementById("prev");
previous.addEventListener("click", () => {
  slideIndex = slideIndex <= 0 ? slides.length - 1 : slideIndex - 1; // Fix index boundary
  let slideWidth = `translateX(${slideIndex * -120}%)`; // Corrected translation calculation
  console.log("🚀 ~ previous.addEventListener ~ slideWidth:", slideWidth);
  slides.forEach((slide) => (slide.style.transform = slideWidth)); // Apply transform to all slides
});

let nextt = document.getElementById("next");
nextt.addEventListener("click", () => {
  slideIndex = slideIndex >= slides.length - 1 ? 0 : slideIndex + 1; // Fix index boundary
  let slideWidth = `translateX(${slideIndex * -120}%)`; // Corrected translation calculation
  console.log("🚀 ~ next.addEventListener ~ slideWidth:", slideWidth);
  slides.forEach((slide) => (slide.style.transform = slideWidth)); // Apply transform to all slides
});
