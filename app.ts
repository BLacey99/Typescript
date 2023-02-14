
import {AxiosTest} from "./axiosTest.js";
import {generateData, generateRandom} from "./generator.js";
import {combinator} from "./combinator.js";



const stringExample: string = 'cake';
const stringCombination: string = 'is a lie';




let cake = () => combinator(stringExample, stringCombination);
let comboBtn : any = document.getElementById("combinatorButton");
comboBtn.addEventListener("click", cake);



let randomFactory =()=> generateData(generateRandom);
let arrayBtn :any = document.getElementById("GenerateArray");
arrayBtn.addEventListener("click", randomFactory);



let axioPull =()=> AxiosTest();
let axioBtn :any = document.getElementById("axioBtn");
axioBtn.addEventListener("click", axioPull);
