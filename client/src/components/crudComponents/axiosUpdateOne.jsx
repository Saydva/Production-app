//import { useState } from "react";
import axios from "axios";

function AxiosUpdateOne() {
   
   
    const data = { dataNumber:6};
    const id = "66f97b3e37b33ce37fd9213b"
           
        const handleClick = ()=>{
            
            axios.patch(`http://localhost:3000/data/${id}`, data)
            .then(response => {
                 console.log(response.data.name);               
              }
            )
              .catch(function (error) {
                console.log(`Error : ${error}`)
                
              });
        }
      


    return ( 
        <div>
            <button onClick={handleClick}>Update data</button>
            <p>patch</p>
        </div>
     );
}

export default AxiosUpdateOne;