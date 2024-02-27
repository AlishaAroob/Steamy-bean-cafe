let swiper = document.querySelector(".slider-container .slider");
let slider = document.querySelectorAll(".slider .slide");
let prev = document.getElementsByClassName("prev");
let next = document.getElementsByClassName("next");

let active = 0;
let lengthslider = slider.length - 1;
next.onclick = function () {
  if (active + 1 > slide.length) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadslider();
};
function reloadslider() {
  let checkleft = slider[active].offsetleft;
  slider.style.left = -checkleft + "px";
}
