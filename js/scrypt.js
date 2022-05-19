"use stict"

/*--------SQUARE--------*/

const buttonGetResultSquare = document.querySelector(".square__button");
const getFromInputSquare = document.querySelector(".square__number");
const resultPerimetrSquare = document.querySelector(".square__perimetr");
const resultAreaSquare = document.querySelector(".square__area");

buttonGetResultSquare.addEventListener("click", function (e) {
    var getSide = getFromInputSquare.value;
    resultPerimetrSquare.innerHTML = `${getSide * 4} см`;
    resultAreaSquare.innerHTML = `${getSide * getSide} см`;
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
    resultPerimetrRectangle.innerHTML = `${(getSideFirst * 2) + (getSideSecond * 2)} см`;
    resultAreaRectangle.innerHTML = `${getSideFirst * getSideSecond} см`;
});

/*--------CIRCLE--------*/
const buttonGetResultCircle = document.querySelector(".circle__button");
const getFromInputCircle = document.querySelector(".circle__number");
const resultСircumferenceCircle = document.querySelector(".circle__circumference");
const resultAreaCircle = document.querySelector(".circle__area");

buttonGetResultCircle.addEventListener("click", function (e) {
    var gerRadius = getFromInputCircle.value;
    var pi = 3.14;
    resultСircumferenceCircle.innerHTML = `${2 * pi * gerRadius} см`;
    resultAreaCircle.innerHTML = `${pi * (gerRadius * gerRadius)} см`;
})

/*--------TRIANGLE--------*/
const buttonGetResultTriangle = document.querySelector(".triangle__button");
const getFromInputTriangleFirst = document.querySelector(".triangle__number_1");
const getFromInputTriangleSecond = document.querySelector(".triangle__number_2");
const getFromInputTriangleThird = document.querySelector(".triangle__number_3");
const resultAreaTriangle = document.querySelector(".triangle__area");

buttonGetResultTriangle.addEventListener("click", function (e) {
    var getSideFirst = Number(getFromInputTriangleFirst.value);
    var getSideSecond = Number(getFromInputTriangleSecond.value);
    var getSideThird = Number(getFromInputTriangleThird.value);
    var halfPerimetrTriangle = (getSideFirst + getSideSecond + getSideThird) / 2;
    var areaTriangle = Math.sqrt(halfPerimetrTriangle * (halfPerimetrTriangle - getSideFirst) * (halfPerimetrTriangle - getSideSecond) * (halfPerimetrTriangle - getSideThird));
    resultAreaTriangle.innerHTML = `${areaTriangle.toFixed(2)} см`;
});