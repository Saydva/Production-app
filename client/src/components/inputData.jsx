import React, { useState } from 'react';
import ObjKey from './build_components/objKey';
import ObjKeyResult from './build_components/objKeyResult';
import ObjArray from "./build_components/objArray"
import ObjArrayResult from "./build_components/objArrayResult"
import ObjOperations from "./build_components/objOperations"
import ObjOperationsResult from "./build_components/objOperationResult"
import "./inputData.css"

function InputData(props) { 

  const property = props.property;

  const [value, setValue] = useState({
    input1:"",
    input2:"",
  })

  const [obj, setObj] = useState({
    partName:"No Name",
    stTime:"No time",
    piecec:[],
    subpiecec:[],
    category:[],
    option:[],
    operations:[],
  })
 

// handler for ObjKey to set data
  const handleClickKey = (event)=>{
    event.preventDefault();
    let objprop = event.target.id;
    let selector = "#"+(event.target.id);
    let data = document.querySelector(`${selector}`).value;
    if (data.trim() != ""){setObj((values) =>({...values, [objprop] : data.trim()}))}; 
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

const PieceElement =()=>{

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
          name ={Object.keys(obj)[4]}
          method = {handleClickArray}
        />
        <ObjArray
          name ={Object.keys(obj)[5]}
          method = {handleClickArray}
        />        
      </div>
      <div className="resultSide">
        <ObjKeyResult
          obj = {obj}          
           arr = {["partName", "stTime"]}
          />
        <ObjArrayResult
            obj = {obj}
            arr = {["category", "option"]}
            />
        </div>
    </div>
  )
}

const SubPieceElemet = ()=>{
  return(
    <div className='container'>
      <div className="inputSide">
      <ObjKey
          name = {Object.keys(obj)[0]}
          method = {handleClickKey}
        />
      <ObjArray
          name ={Object.keys(obj)[2]}
          method = {handleClickArray}
      />
      <ObjArray
          name ={Object.keys(obj)[4]}
          method = {handleClickArray}
      />
      </div>
      <div className="resultSide">
      <ObjKeyResult
          obj = {obj}
          arr = {["partName"]}
      />
      <ObjArrayResult
          obj = {obj}
          arr = {["piecec","category"]}
      />    
      </div>
    </div>
  )
};

const ModelElement = ()=>{
  return(
    <div className='container'>
      <div className="inputSide">
      <ObjKey
          name = {Object.keys(obj)[0]}
          method = {handleClickKey}
        />
        <ObjArray
          name ={Object.keys(obj)[3]}
          method = {handleClickArray}
        />
        <ObjArray
          name ={Object.keys(obj)[2]}
          method = {handleClickArray}
        />
      </div>
      <div className="resultSide">
      <ObjKeyResult
          obj = {obj}
          arr = {["partName"]}
          />
           <ObjArrayResult
          obj = {obj}
          arr = {["subpiecec","piecec"]}
      />  
      </div>
    </div>
  )
}
  

if(property == "piece"){
  return <PieceElement/>;

} else if (property == "subpiece"){
  return <SubPieceElemet/>;
}

else if (property == "model"){
 return <ModelElement/>
}
  
  else {
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
  <ObjArray
  name ={Object.keys(obj)[5]}
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
}}

export default InputData;