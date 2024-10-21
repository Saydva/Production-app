import { useState } from "react";

function Form() {
    const [modelName, setModelName]= useState("")
  const [modelType, setModelType]= useState("")
  // const [operation, setoperation]= useState("")
  const [newObj, setNewObj] = useState("")
  const [subPiece, setSubpiece] = useState("")


  let obj ={
    modelName: modelName,
    modelType: modelType,
    subPieces: [ subPiece      
    ],
  };
  
  

 

  function onClickButton (event) {
    event.preventDefault();
    // console.log(document.querySelector("#name"))
    setNewObj(obj)
   }


function setNameValue(e){
 setModelName(e.target.value)
}

function setTypeValue (e){
  setModelType(e.target.value)
}

let operations ={subPieces:[]};

function sendsubpiece(event){
  event.preventDefault();
    operations.subPieces.push({name:"first"});
    console.log(operations);    
}

function setsubpieces(event){
  event.preventDefault();
  setSubpiece(operations)
}

console.log(obj.subPieces);

    return (
    <div className='buildDatabase'> 
      <form action="" >
        <div className="inputData">
          <label htmlFor="name">Name</label><input value={modelName} onChange={setNameValue} id="name" type="text" placeholder="your model name"/>
          <label htmlFor="type">Type</label><input value={modelType} onChange={setTypeValue} id="type" type="text" placeholder="type of your model"/>
          
      </div>      
          <button onClick={onClickButton}>Confirm New Model</button>          
    </form>
    <form action="">
      <div className="operations">
        <label htmlFor="Subpiece">Subpiece</label><input id="Subpiece"type="text" placeholder="Give the subPiece a name"/>
      </div>
      <button onClick={sendsubpiece}>send to prototype</button>
      <button onClick={setsubpieces}> SET</button>
    </form>
    
    <div className="resultObj">
    <span>"Please send me a data:!!! "</span><br />
      <p>{JSON.stringify(newObj)}</p>
      <ul>{operations.subPieces.map((e,index)=><li key={index}>{e.name}---{e.index}</li>)}</ul>
      </div>  
        </div>
  )
}

export default Form;