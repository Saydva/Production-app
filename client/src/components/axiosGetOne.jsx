import  { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosGetOne() {

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/data')
        .then(response => {
          setData(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
let result = data.filter((e)=>e.name == "Next data").map((e,index)=><li key={index} >{e.name} num: {e.dataNumber}</li>);

// console.log(result.map((e)=>e));

    return (
      <div>
        <input type="text" />
          <p>Hello:{result}</p>
      </div>
    );
}

export default AxiosGetOne;