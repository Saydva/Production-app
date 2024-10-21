import  { useState } from 'react';
import axios from 'axios';

function GetAll() {

    const [data, setData] = useState([]);

    const handleOnClick=() => {
      axios.get('http://localhost:3000/data')
        .then(response => {
          setData(response.data);
          
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    return (
      <div>
        <button onClick={handleOnClick}>get all</button>
        {data.map((item,index) => (
          <li key={index}>{item.name}- {item.dataNumber}-{item._id}</li>
        ))}
        <p></p>
      </div>
    );
}

export default GetAll;