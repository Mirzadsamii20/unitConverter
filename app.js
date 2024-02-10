//selecting elements from DOM

const inputEl = document.getElementById('input');
const okBtn = document.getElementById("ok");
let   resultP= document.getElementById("result");
let   volPar = document.getElementById("volPar");
let   masPar =document.getElementById("masPar");
let  lenPar = document.getElementById("lenPar");




// 1 feet = 0.3048m  1 m = 3.280839895ft
// 1 liter = 0.264172gal 1gal = 3.785411 lit
// 1 lb = 0.45359237kg   1kg = 2.204622
okBtn.addEventListener("click" , mass)

function mass (){
    const inputValue = inputEl.value;

    masPar.textContent = `${inputValue} kilograms = ${(inputValue * 2.204622).toFixed(3)} lbs | ${inputValue} pounds = ${(inputValue * 0.45359237).toFixed(3)} kgs`;
    volPar.textContent = `${inputValue} liters = ${(inputValue * 0.264172).toFixed(3)} galons | ${inputValue} galons = ${(inputValue * 3.785411).toFixed(3)} liters`

    lenPar.textContent = `${inputValue} meters = ${(inputValue * 3.280839895).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * 0.3048).toFixed(3)} meters`

 }