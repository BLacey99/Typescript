const stringExample: string = 'cake';

const stringCombination: string = 'is a lie';


const combinator = (stringEx:string, stringEx2:string) =>{
    console.log('The ' + stringEx + ' ' + stringEx2);
}


//combinator(stringExample, stringCombination);

let comboBtn : any = document.querySelector("combinatorButton");

comboBtn.addEventListener("click", combinator);


let dataDisplay : number[] = [];



let generateRandom = function(value:number): number{
    let generated:number = Math.floor(Math.random() * value);
    console.log(generated);
    return generated;

}

let generateData = function(generatorCB:any): number{
    for(let i:number = 0; i<5; i++){
        console.log(generatorCB(i));
        dataDisplay.push(generatorCB(i));
    }
    console.log(dataDisplay);
    return 1;
}


let randomFactory = generateData(generateRandom);

let arrayBtn :any = document.querySelector("GenerateArray");

arrayBtn.addEventListener("click", randomFactory);