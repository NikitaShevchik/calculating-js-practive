"use stict"

/*--------SQUARE--------*/

const buttonGetResult = document.querySelector(".square__button");
const getFromInput = document.querySelector(".square__number");
const resultPerimetr = document.querySelector(".square__perimetr");
const resultArea = document.querySelector(".square__area");

buttonGetResult.addEventListener("click", function (e) {
    var getSide = getFromInput.value;
    resultPerimetr.innerHTML = `${getSide * 4}`;
    resultArea.innerHTML = `${getSide * getSide}`;
});

/*--------SQUARE--------*/