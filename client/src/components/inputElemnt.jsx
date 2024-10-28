import React, { useState } from 'react';
import "./objElement.css"

function InputData() { 

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
    setObj((values) =>({...values, [objprop] : data}) )
    console.log(obj);
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
  obj[objprop].push(data)
  setObj({...obj})
  console.log(data, obj[objprop]);
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
const method = ""
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
  </span>
)
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
  name2 = "stan. time"
  />
  </div>
  <div className="resultSide">
    <ObjKeyResult/>
    <ObjArrayResult/>
  </div>
</div>)
}

export default InputData;