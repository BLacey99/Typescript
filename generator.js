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
    dataRetainer = dataDisplay;
    dataDisplay = [];
    console.log(dataRetainer + " Retained values from previous iteration");
    return 1;
};
export { generateRandom, generateData, dataRetainer };
