import React, { useState } from "react";

function ReactSelectText(props) {
  const name = props.name;
  const sendData = props.handleData;

  // if (name == "partStTime") {
  //   let element = (document.querySelector(`button#partStTime`).style = {
  //     display: "none",
  //   });
  // element.setAttribute(
  //   "style",
  //   "color:rgb(50,150,200); background-color:#e1f0fe;"
  // );
  // }
  // sendData(e.target.value, name);

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
        />
        {name != "partStTime" ? (
          <button onClick={send} id={name}>
            Save
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default ReactSelectText;
