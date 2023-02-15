
import {AxiosTest} from "./axiosTest.js";
import {dataRetainer, generateData, generateRandom} from "./generator.js";
import {combinator} from "./combinator.js";
import{ mapper}  from "./mappingFunction.js";


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




let mapperDemo = () => mapper(dataRetainer, function(dataSources:any){
    console.log(dataSources + 1);
    return dataSources+1;
});
let mapperBtn :any = document.getElementById("mapperBtn");
mapperBtn.addEventListener("click", mapperDemo);
mapperBtn.className = 'mapperBtn';

