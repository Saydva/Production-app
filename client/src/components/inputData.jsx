import React, { useState } from 'react';
import ObjKey from './build_components/objKey';
import ObjKeyResult from './build_components/objKeyResult';
import ObjArray from "./build_components/objArray"
import ObjArrayResult from "./build_components/objArrayResult"
import ObjOperations from "./build_components/objOperations"
import ObjOperationsResult from "./build_components/objOperationResult"
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
    let data = document.querySelector(`${selector}`).value;
    if (data.trim() != ""){setObj((values) =>({...values, [objprop] : data.trim()}) )
  console.log(obj);}    
    }

//handler for ObjArray to set data
const handleClickArray = (event)=>{
  event.preventDefault();
  let objprop = event.target.id;
  let selector = "#"+(event.target.id);
  let data = document.querySelector(`${selector}`).value;
  if (data.trim() != ""){obj[objprop].push(data.trim())
    setObj({...obj})}
  
}

const handleClickObjOpreations = (e)=>{
  e.preventDefault()
let name = document.querySelector("#operation").value
let set = document.querySelector("#st_time").value

if (name.trim() != "" && set.trim() != ""){setValue({...value, input1:name , input2: set})}
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
    <ObjKeyResult
    obj = {obj}
    />
    <ObjArrayResult
    obj = {obj}
    />
    <ObjOperationsResult
    value = {value}
    />
  </div>
</div>)
}

export default InputData;