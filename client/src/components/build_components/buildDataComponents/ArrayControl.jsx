import React, { useState } from "react";
import Select from "react-select";

function ReactSelectArray(props) {
  const name = props.name;
  const sendData = props.handleData;
  const dataAtribute = props.dataAttribute;
  const dataDescription = props.dataDescription;
  const dataPiece = props.dataPiece;
  const dataSubPiece = props.dataSubPiece;
  const count = props.count;

  const option = [];

  if (dataAtribute) {
    dataAtribute.map((e) =>
      option.push({ data: e, label: e.name + " - " + e.value })
    );
  }

  if (dataDescription) {
    dataDescription.map((e) =>
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
      if (dataAtribute) {
        sendData(userChoice.data, name);
      }
      if (dataDescription) {
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
      <div className="wraper row gapRow">
        <label htmlFor={name} className="label">
          {name}...
        </label>
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
