"use strict";

// Setting Feature icon to be in the middle of Feature block
var mediaQuery = window.matchMedia("(max-width: 767px)");
const featureWidthIcon =
  document.querySelector(".feature").clientWidth / 2 - 37.5;
const icon = document.querySelectorAll(".feature__icon");
for (let i = 0; i < icon.length; i++) {
  if (mediaQuery.matches) icon[i].style.left = `${featureWidthIcon}px`;
}

//To make Navbar block collapsable
//const toggleButton = document.querySelector(".nav__toggler");
//toggleButton.addEventListener("click", function () {
//  document.querySelector(".list__navbar").classList.toggle("hidden");
//});

//if (!mediaQuery.matches) {
// document.querySelector(".list__navbar").classList.remove("hidden");
//}
