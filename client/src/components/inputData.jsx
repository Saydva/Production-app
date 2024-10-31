import React, { useState } from 'react';
import ObjKey from './build_components/buildDataComponents/objKey';
import ObjKeyResult from './build_components/buildDataComponents/objKeyResult';
import ObjArray from "./build_components/buildDataComponents/objArray"
import ObjArrayResult from "./build_components/buildDataComponents/objArrayResult"
import ObjOperations from "./build_components/buildDataComponents/objOperations"
import ObjOperationsResult from "./build_components/buildDataComponents/objOperationResult"
import "./inputData.css"

function InputData(props) { 

  const [sendObj, setSendObj] = useState({});

  const property = props.property;

  const [value, setValue] = useState({
    input1:"",
    input2:"",
  });

  const [obj, setObj] = useState({
    partName:"No Name",
    stTime:"No time",
    piecec:[],
    subpiecec:[],
    category:[],
    option:[],
    operations:[],
  });
 

// handler for ObjKey to set data
  const handleClickKey = (event)=>{
    event.preventDefault();
    let objprop = event.target.id;
    let selector = "#"+(event.target.id);
    let data = document.querySelector(`${selector}`).value;
    if (data.trim() != ""){setObj((values) =>
      ({...values, [objprop] : data.trim()}))}; 
    };

//handler for ObjArray to set data
const handleClickArray = (event)=>{
  event.preventDefault();
  let objprop = event.target.id;
  let selector = "#"+(event.target.id);
  let data = document.querySelector(`${selector}`).value;
  if (data.trim() != ""){obj[objprop].push(data.trim())
    setObj({...obj})};
};

//handler for ObjOperations to set data
const handleClickObjOpreations = (e)=>{
  e.preventDefault();
let name = document.querySelector("#operation").value;
let set = document.querySelector("#st_time").value;
if (name.trim() != "" && set.trim() != "");
  {setValue({...value, input1:name , input2: set})};
};

// before send remove falsy kyes from obj




//handler for sen data to database
const handleSendData = (e)=>{
e.preventDefault();
setSendObj(obj)
};

const ButtonResult = (props)=>{
  const method = props.method;
  return(
    <><button className='senddatabutton' onClick={method}>
      Send data to database</button>
        <p>{JSON.stringify(sendObj)}</p></>
  )
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
        <ButtonResult
        method = {handleSendData}
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
};

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
};
  

if(property == "piece"){
  return <PieceElement/>;
} else if (property == "subpiece"){
  return <SubPieceElemet/>;
}
else if (property == "model"){
 return <ModelElement/>;
  }
};

export default InputData;