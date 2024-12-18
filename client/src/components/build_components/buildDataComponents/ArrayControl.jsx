import React, { useState } from "react";
import Select from "react-select";
import models from "../../../../src/test_components/testingObjects/testProdObj";

// models.map((e) => arr.push({ value: e.modelName, label: e.modelName }));

function ReactSelectArray(props) {
  const name = props.name;
  const sendData = props.handleData;
  const dataOption = props.dataOption;
  const dataCategory = props.dataCategory;
  const dataPiece = props.dataPiece;
  const dataSubPiece = props.dataSubPiece;
  const count = props.count;

  const option = [];

  if (dataOption) {
    dataOption.map((e) =>
      option.push({ data: e, label: e.name + " - " + e.value })
    );
  }

  if (dataCategory) {
    dataCategory.map((e) =>
      option.push({
        data: e,
        label: e.name + " - " + e.value,
      })
    );
  }

  if (dataPiece) {
    dataPiece.map((e) =>
      option.push({
        label: "name " + e.partName + "stTime " + e.partStTime,
        data: e,
      })
    );
  }

  if (dataSubPiece) {
    dataSubPiece.map((e) =>
      option.push({
        label: "name " + e.partName + "stTime " + e.partStTime,
        data: e,
      })
    );
  }

  const [userChoice, setUserChoise] = useState([]);

  // handle sendet data
  const handleSend = () => {
    if (userChoice.length != 0) {
      if (dataOption) {
        sendData(userChoice.data, name);
      }
      if (dataCategory) {
        sendData(userChoice.data, name);
      }
      if (dataPiece) {
        sendData(userChoice.data, name);
      }
      if (dataSubPiece) {
        sendData(userChoice.data, name);
      }
    }
  };

  return (
    <>
      <div className="row">
        <label htmlFor={name}>{name}...</label>
        <Select
          id={name}
          className={name}
          options={option}
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
