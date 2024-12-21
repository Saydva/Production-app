import React, { useState } from "react";

function ReactAtributeDescription(props) {
  const sendData = props.handleData;
  const [attribute, setAttribute] = useState({});
  const [description, setDescription] = useState({});
  const [sendAttrib, setSendAttrib] = useState("");
  const [sendDescrip, setSendDescrip] = useState("");

  // handle option data from child

  const handleAttributeData = (childData, name) => {
    setAttribute(childData);
    setSendAttrib(name);
    sendData(childData, name);
  };

  // handle category data from child

  const handleDescriptionData = (childData, name) => {
    setDescription(childData);
    setSendDescrip(name);
    sendData(childData, name);
  };

  return (
    <div className="wraper column">
      <h4>New Attribute</h4>
      <ReactObjBuild
        name={"attribute"}
        name1={"attribute"}
        name2={"value"}
        handleData={handleAttributeData}
      />
      <h4>New Description</h4>
      <ReactObjBuild
        name={"description"}
        name1={"description"}
        name2={"value"}
        handleData={handleDescriptionData}
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
    console.log(text);
  };

  const handleOperationTextValue = (e) => {
    const text = e.target.value;
    setOperationObj({ ...operationObj, value: text });
    console.log(text);
  };

  const handlePush = () => {
    if (operationObj.name && operationObj.value) {
      sendData(operationObj, name);
    }
  };

  return (
    <div className="wraper column gapCol">
      <div className="wraper row gapRow">
        <label htmlFor={name1} className="label">
          {name1}...
        </label>
        <input
          type="text"
          id={name1}
          className="myInput"
          onChange={handleOperationTextName}
        />
      </div>
      <div className="wraper row gapRow ">
        <label htmlFor={name2} className="label">
          {name2}...
        </label>
        <input
          type="text"
          id={name2}
          className="myInput"
          onChange={handleOperationTextValue}
        />
        <button onClick={handlePush}>Push</button>
      </div>
    </div>
  );
}

export default ReactAtributeDescription;
