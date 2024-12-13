import React, { useState } from "react";

function ReactOptionCategory(props) {
  const sendData = props.handleData;
  const [option, setOption] = useState({});
  const [category, setCategory] = useState({});
  const [sendOpt, setSendOpt] = useState("");
  const [sendCat, setSendCat] = useState("");

  // handle option data from child

  const handleOptionData = (childData, name) => {
    setOption(childData);
    setSendOpt(name);
    sendData(childData, name);
  };

  // handle category data from child

  const handleCategoryData = (childData, name) => {
    setCategory(childData);
    setSendCat(name);
    sendData(childData, name);
  };

  return (
    <div>
      <h4 className="heading">New Option</h4>

      <ReactObjBuild
        name={"option"}
        name1={"option"}
        name2={"value"}
        handleData={handleOptionData}
      />
      <h4 className="heading">New Category</h4>

      <ReactObjBuild
        name={"category"}
        name1={"category"}
        name2={"value"}
        handleData={handleCategoryData}
      />
    </div>
  );
}

function ReactObjBuild(props) {
  const name = props.name;
  const name1 = props.name1;
  const name2 = props.name2;
  const sendData = props.handleData;

  const [operationObj, setOperationObj] = useState({});

  const handleOperationTextName = (e) => {
    const text = e.target.value;
    setOperationObj({ ...operationObj, name: text });
  };

  const handleOperationTextTime = (e) => {
    const text = e.target.value;
    setOperationObj({ ...operationObj, value: text });
  };

  const handlePush = () => {
    if (operationObj.name && operationObj.value) {
      sendData(operationObj, name);
    }
  };

  return (
    <>
      <div className="row">
        <label htmlFor={name1}>{name1}...</label>
        <input
          type="text"
          id={name1}
          className="myInput"
          onChange={handleOperationTextName}
        />
      </div>
      <div className="row">
        <label htmlFor={name2}>{name2}...</label>
        <input
          type="text"
          id={name2}
          className="myInput"
          onChange={handleOperationTextTime}
        />
        <button onClick={handlePush}>Push</button>
      </div>
    </>
  );
}

export default ReactOptionCategory;
