


const axios = require('axios');


const AxiosTest =()=>{

    const url: string = 'https://jsonplaceholder.typicode.com/posts'
    const data = {
      a: 10,
      b: 20,
    };
    axios
      .post(url, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      })
      .then(({data}: {data:number}) => {
        console.log(data);
    });
    

}



export  {AxiosTest};