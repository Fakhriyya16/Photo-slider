"use strict";

let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");

let images = document.querySelectorAll(".images img");

rightArrow.addEventListener("click", function () {
    let currentImg = document.querySelector(".active-image");
    let currentImgId = parseInt(currentImg.getAttribute("data-id"));

    let nextImgId = currentImgId + 1;
    if (nextImgId > images.length) {
        nextImgId = 1;
    }

    currentImg.classList.remove("active-image");
    let nextImg = Array.from(document.querySelectorAll(".images img")).find(m => m.getAttribute("data-id") == nextImgId);
    nextImg.classList.add("active-image");
});

leftArrow.addEventListener("click", function () {
    let currentImg = document.querySelector(".active-image");
    let currentImgId = parseInt(currentImg.getAttribute("data-id"));

    let previousImgId = currentImgId - 1;
    if (previousImgId < 1) {
        previousImgId = 5;
    }

    currentImg.classList.remove("active-image");
    let previousImg = Array.from(document.querySelectorAll(".images img")).find(m => m.getAttribute("data-id") == previousImgId);
    previousImg.classList.add("active-image");
});
