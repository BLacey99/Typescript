import { output } from "./outputter.js";

const mapper = (data:[], callback: (dataCB:any) => void) =>{
    let tempArr:any[]=[];
    for(let dataPiece in data){
        console.log(data[dataPiece]);
        tempArr.push(callback(data[dataPiece]));
    }

    console.log("Original data source: " + data);
    console.log("_______________________________");
    console.log("Post-map operation: " + tempArr);
    output.innerHTML = `Original Data Source: ${data} <br><br> Post-Map Operation: ${tempArr}`;
}

export{mapper};