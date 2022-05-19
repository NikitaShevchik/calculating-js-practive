"use stict"

/*--------SQUARE--------*/

const buttonGetResultSquare = document.querySelector(".square__button");
const getFromInputSquare = document.querySelector(".square__number");
const resultPerimetrSquare = document.querySelector(".square__perimetr");
const resultAreaSquare = document.querySelector(".square__area");

buttonGetResultSquare.addEventListener("click", function (e) {
    var getSide = getFromInputSquare.value;
    resultPerimetrSquare.innerHTML = `${getSide * 4}`;
    resultAreaSquare.innerHTML = `${getSide * getSide}`;
});

/*--------RECTANGLE--------*/
const buttonGetResultRectangle = document.querySelector(".rectangle__button");
const getFromInputRectangleFirst = document.querySelector(".rectangle__number_1");
const getFromInputRectangleSecond = document.querySelector(".rectangle__number_2");
const resultPerimetrRectangle = document.querySelector(".rectangle__perimetr");
const resultAreaRectangle = document.querySelector(".rectangle__area");

buttonGetResultRectangle.addEventListener("click", function (e) {
    var getSideFirst = getFromInputRectangleFirst.value;
    var getSideSecond = getFromInputRectangleSecond.value;
    resultPerimetrRectangle.innerHTML = `${(getSideFirst * 2) + (getSideSecond * 2)}`;
    resultAreaRectangle.innerHTML = `${getSideFirst * getSideSecond}`;
});