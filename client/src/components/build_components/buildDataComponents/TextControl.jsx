import React, { useState } from "react";

function ReactSelectText(props) {
  const name = props.name;
  const sendData = props.handleData;
  const num = props.num;
  const settingFromParent = props.settingFromParent;

  let [text] = useState("");

  // handle data from child
  const handleText = (e) => {
    if (sendData) {
      text = e.target.value;
    }
  };

  const send = (e) => {
    e.preventDefault();
    sendData(text, name);
  };

  return (
    <>
      <div className="row">
        <label htmlFor={name}>{name}...</label>
        <input
          type="text"
          id={name}
          className="myInput"
          onChange={handleText}
          value={num}
          readOnly={settingFromParent}
        />
        {name === "partStTime" ||
        name === "Option name" ||
        name === "Category name" ? (
          ""
        ) : (
          <button onClick={send} id={name}>
            Save
          </button>
        )}
      </div>
    </>
  );
}

export default ReactSelectText;
