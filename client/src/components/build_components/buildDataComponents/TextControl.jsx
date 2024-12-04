import React from "react";

function ReactSelectText(props) {
  const name = props.name;
  const sendData = props.handleData;

  // handle data from child
  const handleText = (e) => {
    if (sendData) {
      sendData(e.target.value, name);
    }
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
      </div>
    </>
  );
}

export default ReactSelectText;
