"use strict";

// Setting Feature icon to be in the middle of Feature block
var mediaQuery = window.matchMedia("(max-width: 767px)");
const featureWidthIcon =
  document.querySelector(".feature").clientWidth / 2 - 37.5;
const icon = document.querySelectorAll(".feature__icon");
for (let i = 0; i < icon.length; i++) {
  if (mediaQuery.matches) icon[i].style.left = `${featureWidthIcon}px`;
}

//Making Navbar block collapsable
const toggleButton = document.querySelector(".nav__toggler");
toggleButton.addEventListener("click", function () {
  document.querySelector(".list__navbar").classList.toggle("hidden");
});

if (!mediaQuery.matches) {
  document.querySelector(".list__navbar").classList.remove("hidden");
}

//Adding link shortener API
async function getLink(api_url, input) {
  const response = await fetch(api_url);
  const data = await response.json();

  if (!data.ok) {
    document.querySelector(".link-shorten__form").classList.add("error");
  } else {
    document.querySelector(".link-shorten__form").classList.remove("error");
    const link = data.result["full_short_link"];
    //Adds html code if we get data from api
    const html = ` 
  <section class="block block--secondary link-holder">
  <p class="link-to-shorten">${input}</p>
  <p class="shortened-link">${link}</p>
  <button class="btn btn--square btn--cyan copy">Copy</button>
</section>
    `;
    document.querySelector(".features").insertAdjacentHTML("afterbegin", html);
    const copyBtn = document.querySelectorAll(".copy");
    const shortenedLinks = document.querySelectorAll(".shortened-link");

    // Adding event listener to copy button
    for (let i = 0; i < copyBtn.length; i++) {
      copyBtn[i].addEventListener("click", function () {
        const copyText = shortenedLinks[i];
        navigator.clipboard.writeText(copyText.textContent);
        copyBtn[i].textContent = "Copied!";
        copyBtn[i].style.background = "hsl(257, 27%, 26%)";
      });
    }
  }
}

//Applying above function to the inserted link
document
  .querySelector(".shorten__button")
  .addEventListener("click", function () {
    const input = document.querySelector(".link__input").value;
    document.querySelector(".link__input").value = "";
    const api_url = `https://api.shrtco.de/v2/shorten?url=${input}`;
    getLink(api_url, input);
  });
