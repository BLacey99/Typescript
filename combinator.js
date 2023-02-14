import { output } from "./outputter.js";
const combinator = (stringEx, stringEx2) => {
    console.log('The ' + stringEx + ' ' + stringEx2);
    output.innerHTML = `The ${stringEx}  ${stringEx2}`;
};
export { combinator };
