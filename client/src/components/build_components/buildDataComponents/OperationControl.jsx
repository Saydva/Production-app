import React, { useState } from "react";

function ReactSelectOperation(props) {
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
    const number = Number(e.target.value);
    setOperationObj({ ...operationObj, time: number });
  };

  const handlePush = () => {
    if (operationObj.name && operationObj.time) {
      sendData(operationObj, name);
    }
    console.log(name);
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

export default ReactSelectOperation;
