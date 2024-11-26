import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSelectArray from "./build_components/buildDataComponents/ArrayControl";
import ReactSelectText from "./build_components/buildDataComponents/TextControl";
import ReactSelectOperation from "./build_components/buildDataComponents/OperationControl";
import Result from "./build_components/modelcomponents/Result";
import "../components/InputDataNew.css";

function InputData(props) {
  const property = props.property;

  //data from text and array children

  const [dataFromChild, setDataFromChild] = useState("");
  const [settingFromChild, setSettingFromChild] = useState("");

  // data from opration (text, text) component

  const [dataFromOperation, setDataFromOperation] = useState("");

  //handle operation data

  // handlers for text array children

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const handleSettingFromChild = (data) => {
    setSettingFromChild(data);
  };

  useEffect(() => {
    obj[settingFromChild] = dataFromChild;
    console.log(dataFromChild, settingFromChild, obj);
  });

  //obj to store data

  const [obj, setObj] = useState({
    partName: "",
    stTime: "",
    piecec: [],
    subpiecec: [],
    category: [],
    option: [],
    operations: [],
  });

  const [result, setResult] = useState("Send data!");

  // check if is data from operation component seted up

  useEffect(() => {
    if (Object.keys(dataFromOperation).length != 0) {
      obj.operations.push(dataFromOperation);
    }
  }, [dataFromOperation]);

  const handleDataFromOperation = (data) => {
    setDataFromOperation(data);
  };

  // obj to reset obj to empty

  const template = {
    partName: "No Name",
    stTime: "No time",
    piecec: [],
    subpiecec: [],
    category: [],
    option: [],
    operations: [],
  };

  //useEffect to catch updated obj
  // useEffect(() => {
  //   console.log("Obj updated:", JSON.stringify(sendObj));
  // }, [sendObj]);

  // handler for ObjKey to set data

  //handler for ObjArray to set data

  //op obj maeby i will not even use it

  // let operObj = {
  //   operation: "",
  //   time: "",
  // };

  //handler for ObjOperations to set data

  // const handleClickObjOpreations = (e) => {
  //   e.preventDefault();
  //   let name = document.querySelector("#operation").value;
  //   let time = document.querySelector("#time").value;
  //   time = Number(time);
  //   if (name.length > 0 && Number(time)) {
  //     console.log("yes");
  //     operObj.operation = name;
  //     operObj.time = time;
  //     obj.operations.push(operObj);
  //     setObj({ ...obj });
  //     console.log(obj.operations.length);
  //   } else {
  //     console.log("no");
  //   }
  // };

  // before send remove falsy(unused) keys from obj

  let delKeys = [];

  if (property == "piece") {
    delKeys = ["piecec", "subpiecec"];
  } else if (property == "subpiece") {
    delKeys = ["stTime", "option", "subpiecec"];
  } else if (property == "model") {
    delKeys = ["stTime", "category", "option"];
  }

  function deleteObjKeys(o, arr) {
    arr.forEach((element) => {
      delete o[element];
    });
  }

  // implement axios
  let postFunc = async () => {
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

  //handler for sen data to database

  function handleSendData(e) {
    e.preventDefault();
    deleteObjKeys(obj, delKeys);
    postFunc();
    setObj(template);
  }

  //button result

  const ResulMessage = () => {
    return (
      <div className="result">
        <p>Message from server : {result}</p>
      </div>
    );
  };

  const sTtime = "no time";

  const PieceElement = () => {
    return (
      <div className="objBuild">
        <div className="left">
          <ReactSelectText
            name={Object.keys(obj)[0]}
            valueOf={String()}
            callback={String}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectText name={Object.keys(obj)[1]} valueSet={sTtime} />
          <ReactSelectArray
            name={Object.keys(obj)[4]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectArray
            name={Object.keys(obj)[5]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            OperationObj={handleDataFromOperation}
          />
        </div>
        <div className="right">
          <Result
            // name={obj.partName}
            // stTime={obj.stTime}
            // piecec={obj.piecec}
            // subpiecec={obj.subpiecec}
            // category={obj.category}
            // option={obj.option}
            // operations={obj.operations}
            obj={obj}
          />
        </div>
      </div>
    );
  };

  const SubPieceElemet = () => {
    return (
      <div className="objBuild">
        <ReactSelectText
          name={Object.keys(obj)[0]}
          valueOf={String()}
          callback={String}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectArray
          name={Object.keys(obj)[2]}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectArray
          name={Object.keys(obj)[4]}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />

        <ReactSelectOperation
          name1={"operation"}
          name2={"stTime"}
          OperationObj={handleDataFromOperation}
        />
        <Result />
      </div>
    );
  };

  // console.log(document.querySelectorAll("input#piecec").value);

  const ModelElement = () => {
    return (
      <div className="objBuild">
        <ReactSelectText
          name={Object.keys(obj)[0]}
          valueOf={String()}
          callback={String}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectArray
          name={Object.keys(obj)[2]}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectArray
          name={Object.keys(obj)[3]}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectArray
          name={Object.keys(obj)[4]}
          sendDataToParent={handleDataFromChild}
          sendSettingFromChild={handleSettingFromChild}
        />
        <ReactSelectOperation
          name1={"operation"}
          name2={"stTime"}
          OperationObj={handleDataFromOperation}
        />
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
