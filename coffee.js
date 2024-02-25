let slideIndex = 0;
function moveSlide(n) {
  const slide = document.querySelectorAll(".slide");
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slider").style.transform = `translateX(-${
    slideWidth * slideIndex
  }px)`;
}
