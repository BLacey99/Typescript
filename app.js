import { AxiosTest } from "./axiosTest.js";
import { generateData, generateRandom } from "./generator.js";
import { combinator } from "./combinator.js";

const stringExample = 'cake';
const stringCombination = 'is a lie';

let cake = () => combinator(stringExample, stringCombination);
let comboBtn = document.getElementById("combinatorButton");
comboBtn.addEventListener("click", cake);

let randomFactory = () => generateData(generateRandom);
let arrayBtn = document.getElementById("GenerateArray");
arrayBtn.addEventListener("click", randomFactory);

let axioPull = () => AxiosTest();
let axioBtn = document.getElementById("axioBtn");
axioBtn.addEventListener("click", axioPull);
