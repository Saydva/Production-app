import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSelectArray from "./build_components/buildDataComponents/ArrayControl";
import ReactSelectText from "./build_components/buildDataComponents/TextControl";
import ReactSelectOperation from "./build_components/buildDataComponents/OperationControl";
import "./css/input.css";

function InputData(props) {
  const property = props.property;

  //obj to store data

  const [obj, setObj] = useState({
    partName: "",
    partStTime: "",
    piecec: [],
    subpiecec: [],
    category: [],
    option: [],
    operations: [],
  });

  // handle inputs data

  // data from text input
  const handleDataFromText = (childData, name) => {
    obj[name].push(childData);
    console.log(obj);
  };

  // data from operations inputs

  const handleDataOperations = (childData, name) => {
    obj[name].push(childData);
    console.log(obj);
  };

  // data from React-Select

  const handleDataSelect = (childData, name) => {
    obj[name].push(childData);
    console.log(obj);
  };

  // before send remove falsy(unused) keys from obj

  let delKeys = [];

  if (property == "piece") {
    delKeys = ["piecec", "subpiecec"];
    deleteObjKeys(obj, delKeys);
  } else if (property == "subpiece") {
    delKeys = ["stTime", "option", "subpiecec"];
    deleteObjKeys(obj, delKeys);
  } else if (property == "model") {
    delKeys = ["stTime", "category", "option"];
    deleteObjKeys(obj, delKeys);
  }

  function deleteObjKeys(o, arr) {
    arr.forEach((element) => {
      delete o[element];
    });
  }

  // implement axios
  let postData = async () => {
    console.log(obj);
    await axios
      .post("http://localhost:3000/model", obj)
      .then((response) => {
        setResult(response);
        console.log(response);
      })
      .catch((err) => {
        setResult(err.message);
        console.log(err.message);
      });
  };

  const PieceElement = () => {
    return (
      <div className="buildPage">
        <div className="input">
          <ReactSelectText
            name={Object.keys(obj)[0]}
            handleData={handleDataFromText}
          />
          <ReactSelectText name={Object.keys(obj)[1]} />
          <ReactSelectArray
            name={Object.keys(obj)[2]}
            handleData={handleDataSelect}
          />
          <ReactSelectArray
            name={Object.keys(obj)[3]}
            handleData={handleDataSelect}
          />
          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            name={Object.keys(obj)[4]}
            handleData={handleDataOperations}
          />
        </div>
        <div className="result"></div>
      </div>
    );
  };

  const SubPieceElemet = () => {
    return (
      <div className="buildPage">
        <div className="input">
          <ReactSelectText
            name={Object.keys(obj)[0]}
            handleData={handleDataFromText}
          />
          <ReactSelectText
            name={Object.keys(obj)[1]}
            handleData={handleDataFromText}
          />
          <ReactSelectArray name={Object.keys(obj)[2]} />
          <ReactSelectArray name={Object.keys(obj)[3]} />
          <ReactSelectOperation name1={"operation"} name2={"stTime"} />
        </div>
        <div className="result"></div>
      </div>
    );
  };

  const ModelElement = () => {
    return (
      <div className="buildPage">
        <div className="input">
          <ReactSelectText
            name={Object.keys(obj)[0]}
            handleData={handleDataFromText}
          />
          <ReactSelectText
            name={Object.keys(obj)[1]}
            handleData={handleDataFromText}
          />

          <ReactSelectArray name={Object.keys(obj)[2]} />
          <ReactSelectArray name={Object.keys(obj)[3]} />
          <ReactSelectOperation name1={"operation"} name2={"stTime"} />
          <div className="result"></div>
        </div>
      </div>
    );
  };

  // console.log(parentState);

  if (property == "piece") {
    return <PieceElement />;
  } else if (property == "subpiece") {
    return <SubPieceElemet />;
  } else if (property == "model") {
    return <ModelElement />;
  }
}

export default InputData;
