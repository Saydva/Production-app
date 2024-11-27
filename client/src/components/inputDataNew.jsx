import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSelectArray from "./build_components/buildDataComponents/ArrayControl";
import ReactSelectText from "./build_components/buildDataComponents/TextControl";
import ReactSelectOperation from "./build_components/buildDataComponents/OperationControl";
import "../components/InputDataNew.css";

function InputData(props) {
  const property = props.property;

  //data from text and array children

  const [dataFromChild, setDataFromChild] = useState("");
  const [settingFromChild, setSettingFromChild] = useState("");

  // data from opration (text, text) component

  const [dataFromOperation, setDataFromOperation] = useState("");

  // handlers for text array children

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  const handleSettingFromChild = (data) => {
    setSettingFromChild(data);
  };

  useEffect(() => {
    obj[settingFromChild] = dataFromChild;
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

  useEffect(() => {
    if (obj) {
      console.log(obj);
    }
  }, [obj]);

  const [result, setResult] = useState("Send data!");

  // check if is data from operation component seted up

  useEffect(() => {
    if (Object.keys(dataFromOperation).length != 0) {
      obj.operations.push(dataFromOperation);
    }
    setObj({ ...obj });
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

  const update = () => {
    setObj({ ...obj });
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
            name={Object.keys(obj)[2]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectArray
            name={Object.keys(obj)[3]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            OperationObj={handleDataFromOperation}
          />
        </div>
        <div className="right"></div>
      </div>
    );
  };

  const SubPieceElemet = () => {
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
          <ReactSelectArray
            name={Object.keys(obj)[1]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />
          <ReactSelectArray
            name={Object.keys(obj)[2]}
            sendDataToParent={handleDataFromChild}
            sendSettingFromChild={handleSettingFromChild}
          />

          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            OperationObj={handleDataFromOperation}
            update={update}
          />
        </div>
      </div>
    );
  };

  // console.log(document.querySelectorAll("input#piecec").value);

  const ModelElement = () => {
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
          <ReactSelectArray
            name={Object.keys(obj)[1]}
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
          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            OperationObj={handleDataFromOperation}
          />
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
