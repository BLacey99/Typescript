import { output } from "./outputter.js";

let dataDisplay : number[] = [];
let dataRetainer:any;
let generateRandom = function(value:number): number{
    let generated:number = Math.floor(Math.random() * value);
    //console.log(generated);
    return generated;

}

interface Generator{
    generatedValue: number,
    iteration: number
}



let generateData = function(generatorCB:any): void{
    for(let i:number = 5; i<25; i++){
       // console.log(generatorCB(i));
        dataDisplay.push(generatorCB(i));
    }
    console.log(dataDisplay);
    
  

    output.innerHTML = `Current Value: ${dataDisplay} <br> <br> Previous Value: ${dataRetainer}`;
  
    console.log(dataRetainer + " Retained values from previous iteration");
  
    (function memorizer(){
        dataRetainer = dataDisplay;
        dataDisplay = [];
    })();
}



export {generateRandom, generateData, dataRetainer};