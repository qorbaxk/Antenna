let burgerMenu = document.querySelector(".button--burger");
let buttonWrapper = document.querySelector(".buttonWrapper");
let menu = document.querySelector(".menu");
let sns = document.querySelector(".social-media");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("close");
  buttonWrapper.classList.toggle("overlay");
  menu.classList.toggle("overlay");
  sns.classList.toggle("overlay");
});
