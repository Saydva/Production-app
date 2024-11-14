import React, { useState } from "react";
import Select from "react-select";
import models from "../../../test_components/testingObjects/testProdObj";
import "./rowCompArr.css";

const arr = [];
models.map((e) => arr.push({ value: e.modelName, label: e.modelName }));

function ReactSelect() {
  const [selectedCar, setSelectedCar] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedCar(selectedOption);
  };

  const [array, setArray] = useState([]);

  //handlers

  const handleclick = (e) => {
    e.preventDefault();
    if (selectedCar) {
      array.push(selectedCar);
      setArray([...array]);
    }

    console.log(array);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "white",
      display: "flex",
      flexWrap: "nowrap",
      width: "15em",
      fontSize: 13,
    }),

    menu: (provided) => ({
      ...provided,
      background: "white",
      width: "15em",
      fontSize: 13,
    }),
  };

  console.log(selectedCar ? selectedCar.value : "no value");

  return (
    <div className="flex">
      <div className="select-container">
        <div className="select-wrapper">
          <Select
            options={arr}
            onChange={handleChange}
            placeholder="Select a car brand..."
            className="select-input"
            styles={customStyles}
            inputId="dodo"
          />
        </div>
      </div>
      <span className="choise">
        {selectedCar ? selectedCar.value : "please choise"}
      </span>
      <span>
        {" "}
        <button onClick={handleclick}>Send this</button>
        <span>{JSON.stringify(array)}</span>
      </span>
    </div>
  );
}

export default ReactSelect;
