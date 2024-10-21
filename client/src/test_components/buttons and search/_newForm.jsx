import { useState } from "react";


function FormNew() {
    
    let arr = [];

    const [Count, setCount] = useState(arr);
    const [obj, setObj]= 
    useState({
                                    name : "",
                                    category : "",
                                    subpiece:[],

                                    })
    
    let sub= [];
    
    
    let change = ()=>{
        obj.subpiece = sub
        arr.push(obj)
        setCount(arr)
        console.log(Count);
        console.log(sub);
       
    }

    let subPiece = ()=>{
        sub.push("abc");       
        console.log(sub);
    }

    

    return ( 
    <div>
        <button onClick={() => change()}>
                Push obj
            </button>
            <button onClick={() => subPiece()}>
                Push sub
            </button>
            <button onClick={() => sub = []}>
                del arr
            </button>
        <ul>
            
       </ul>
        
    </div> );
}

export default FormNew;