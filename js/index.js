"use strict"

const dropButton = document.querySelector(".menu");
const dropMenu = document.querySelector(".dropMenu");

dropButton.addEventListener("click" , () => {
  dropMenu.classList.toggle("active");
})