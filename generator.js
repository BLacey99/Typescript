import { output } from "./outputter.js";
let dataDisplay = [];
let dataRetainer;
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
    console.log(dataDisplay);
    output.innerHTML = `Current Value: ${dataDisplay} <br> <br> Previous Value: ${dataRetainer}`;
    console.log(dataRetainer + " Retained values from previous iteration");
    (function memorizer() {
        dataRetainer = dataDisplay;
        dataDisplay = [];
    })();
};
export { generateRandom, generateData, dataRetainer };
