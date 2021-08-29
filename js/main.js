"use strict";

// Setting Feature icon to be in the middle of Feature block
var mediaQuery = window.matchMedia("(max-width: 767px)");
const featureWidth = document.querySelector(".feature").clientWidth / 2 - 37.5;
if (mediaQuery.matches)
  document.querySelector(".feature__icon").style.left = `${featureWidth}px`;
