import  { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function GetOne() {

    const [data, setData] = useState([]);
    const [searchTerm, SetSearchTerm] = useState("");
    const inputRef = useRef();
    

  const handleClick = () => {
       SetSearchTerm(inputRef.current.value);
  };

    useEffect(() => {
      axios.get('http://localhost:3000/data')
        .then(response => {
          setData(response.data)          
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
let result = data.filter((e)=>e.name == searchTerm).map((e,index)=><li key={index} >{e.name} num: {e.dataNumber}, id:{e._id}</li>);

// console.log(result.map((e)=>e));

    return (
      <div>
        <input type="text" ref = {inputRef} placeholder='please insert a name...'/>
        <button onClick={handleClick}>Click</button>
          <p>Hello:{result}</p>
      </div>
    );
}

export default GetOne;