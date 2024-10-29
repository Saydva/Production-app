import React, { useState } from 'react';
import "./objElement.css"

function InputData() { 

  const [value, setValue] = useState({
    input1:"",
    input2:"",
  })

  const [obj, setObj] = useState({
    partName:"No Name",
    stTime:"No time",
    piecec:[],
    category:[],
    materials:[],
    operations:[],
  })

// handler for ObjKey to set data
  const handleClickKey = (event)=>{
    event.preventDefault()
    let objprop = event.target.id
    let selector = "#"+(event.target.id)
    let data = document.querySelector(`${selector}`).value
if (data.trim() != ""){setObj((values) =>({...values, [objprop] : data.trim()}) )
  console.log(obj);}    
    }

// component ObjKey
 const ObjKey = (props)=>{
  const name = props.name
  const method = props.method
  
  return (
  <span key={name}>
    <label htmlFor={name}>{name}</label>
    <input id={name} type="text" />
    <button id={name} onClick={method}>Set {name}</button>
  </span>)};

//handler for ObjArray to set data
const handleClickArray = (event)=>{
  event.preventDefault();
  let objprop = event.target.id;
  let selector = "#"+(event.target.id);
  let data = document.querySelector(`${selector}`).value;
  if (data.trim() != ""){obj[objprop].push(data.trim())
    setObj({...obj})}
  
}

// result from objKey
const ObjKeyResult = ()=>{
  return(
    <>
    <p>{obj.partName}</p>
    <p>{obj.stTime}</p>
    </>
  )
}

// component ObjArray
const ObjArray = (props)=>{
  const name = props.name;
  const method = props.method
  return(
    <span key={name}>
    <label htmlFor={name}>{name}</label>
    <input id={name} type="text" />
    <button onClick={method} id={name} >Set {name}</button>
  </span>)}

// objArrayResult
const ObjArrayResult = ()=>{
return(
  <>
  <p>{JSON.stringify(obj.piecec)}</p>
  <p>{JSON.stringify(obj.category)}</p>
  <p>{JSON.stringify(obj.materials)}</p>
  </>)
}

//component ObjOperations

const ObjOperations = (props)=>{
const name1 = props.name1;
const name2 = props.name2;
const method = props.method;
return (
  <span className='row'>
  <span key={name1} className='column'>
    <span className='row'><label htmlFor={name1}>{name1}</label>
    <input id={name1} type="text" />
    </span>
    <span className='row'><label htmlFor={name2}>{name2}</label>
    <input id={name2} type="text" />
    </span>    
  </span>
  <button onClick={method} id={name1} >Set <br />{name1}
  </button>
  </span>)
};

//handle objOperations click


const handleClickObjOpreations = (e)=>{
  e.preventDefault()
let name = document.querySelector("#operation").value
let set = document.querySelector("#st_time").value

if (name.trim() != "" && set.trim() != ""){setValue({...value, input1:name , input2: set})}
}
//result of objOperations
const ObjOperationsResult = ()=>{
  return(
    <>
    <p>{JSON.stringify(value.input1)}</p>
    <p>{JSON.stringify(value.input2)}</p>
    </>)
  }

  
// render component
  return ( 
    <div className='container'>
  <div className="inputSide">
  <ObjKey
  name = {Object.keys(obj)[0]}
  method = {handleClickKey}
  />
  <ObjKey
  name = {Object.keys(obj)[1]}
  method = {handleClickKey}
  />
  <ObjArray
  name ={Object.keys(obj)[2]}
  method = {handleClickArray}
  />
  <ObjArray
  name ={Object.keys(obj)[3]}
  method = {handleClickArray}
  />
  <ObjArray
  name ={Object.keys(obj)[4]}
  method = {handleClickArray}
  />
  <ObjOperations
  name1 = "operation"
  name2 = "st_time"
  method = {handleClickObjOpreations}
  />
  </div>
  <div className="resultSide">
    <ObjKeyResult/>
    <ObjArrayResult/>
    <ObjOperationsResult/>
  </div>
</div>)
}

export default InputData;