import { output } from "./outputter.js";


const combinator = (stringEx:string, stringEx2:string) =>{
    console.log('The ' + stringEx + ' ' + stringEx2);
    output.innerHTML = `The ${stringEx}  ${stringEx2}`;
}

export {combinator};

