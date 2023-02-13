"use strict";
const stringExample = 'cake';
const stringCombination = 'is a lie';
const combinator = (stringEx, stringEx2) => {
    console.log('The ' + stringEx + ' ' + stringEx2);
};
let cakeProof = () =>combinator(stringExample, stringCombination);
let comboBtn = document.querySelector("#combinatorButton");

comboBtn.addEventListener("click", cakeProof);




let dataDisplay = [];
let generateRandom = function (value) {
    let generated = Math.floor(Math.random() * value);
    //console.log(generated);
    return generated;
};
let generateData = function (generatorCB) {
    for (let i = 5; i < 25; i++) {
       // console.log(generatorCB(i));
        dataDisplay.push(generatorCB(i));
    }
    alert(dataDisplay);
    console.log(dataDisplay);
    dataDisplay = [];
    return 1;
};
let randomFactory = () => generateData(generateRandom);
let arrayBtn = document.getElementById("GenerateArray");
arrayBtn.addEventListener("click", randomFactory);z
