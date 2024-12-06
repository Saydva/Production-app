import React, { useState } from "react";
import Select from "react-select";
import models from "../../../../src/test_components/testingObjects/testProdObj";

const arr = [];
models.map((e) => arr.push({ value: e.modelName, label: e.modelName }));

function ReactSelectArray(props) {
  const name = props.name;
  const sendData = props.handleData;

  const [userChoice, setUserChoise] = useState([]);

  // handle sendet data
  const handleSend = () => {
    if (userChoice.length != 0) {
      sendData(userChoice, name);
    }
  };

  return (
    <>
      <div className="row">
        <label htmlFor={name}>{name}...</label>
        <Select
          id={name}
          className={name}
          options={arr}
          onChange={(value) => setUserChoise(value)}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              width: "166px",
            }),
          }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </>
  );
}

export default ReactSelectArray;
