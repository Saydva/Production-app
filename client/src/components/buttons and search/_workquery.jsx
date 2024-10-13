import { useState } from "react";


function Workquery({data}){
    const [result, setresult]=useState([data])
    function handleRemove (i){
      setresult( result.filter((e) =>e!=i))
      data = result
      console.log(result);
      console.log(data);      
    }

 


    return ( 
        <div>
            <h4>Production section</h4>
          <ul className="ulist">
            {data.map((e,index)=><li className="listitem" key={index}><span>{e}</span><button key={index} onClick={() => handleRemove(e)}>Delete</button></li>)}</ul>
        </div>
     );
}

export default Workquery;