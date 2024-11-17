import React, { useState } from "react";
import Select from "react-select";
import models from "../../../../src/test_components/testingObjects/testProdObj";
import "./rowCompArr.css";

const arr = [];
models.map((e) => arr.push({ value: e.modelName, label: e.modelName }));

function ReactSelectArray(props) {
  const name = props.name;
  const [selectedObject, setselectedObject] = useState(null);
  const [array, setArray] = useState([]);

  //handlers

  const handleChange = (selectedOption) => {
    setselectedObject(selectedOption);
  };

  const handleSave = () => {
    if (array.length > 0) {
      document.querySelector(`span#${name}`).innerText =
        "You saved this:" + JSON.stringify(array);
    }
  };

  const handleclickArray = (e) => {
    if (selectedObject) {
      array.push(selectedObject);
      setArray([...array]);
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: "white",
      display: "flex",
      flexWrap: "nowrap",
      width: "15em",
      fontSize: 13,
      minHeight: "30px",
      height: "30px",
    }),

    menu: (provided) => ({
      ...provided,
      background: "white",
      width: "15em",
      fontSize: 13,
    }),
  };

  return (
    <div>
      <div className="flex">
        <label
          htmlFor={name}
          style={{ display: "inline-block", width: "6rem" }}
        >
          {name}..
        </label>
        <div className="select-container">
          <div className="select-wrapper">
            <Select
              options={arr}
              onChange={handleChange}
              placeholder="Select a car brand..."
              className="select-input"
              styles={customStyles}
              inputId={name}
              // isMulti
            />
          </div>
        </div>
        {/* <span className="choise">
        {selectedObject ? selectedObject.value : "please choise"}
      </span> */}
        <span
          style={{
            height: "1.5rem",
            padding: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            onClick={handleclickArray}
            className="arow"
            src="/svg/reshot-icon-arrow-right-ZP2WDL9B8N.svg"
            alt=""
            style={{ height: "1.5rem", padding: "8px" }}
          />
          <div style={{ color: "grey" }}>{JSON.stringify(array)}</div>
          <button
            onClick={handleSave}
            style={{
              margin: "0 8px",
              padding: "0.3rem",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: " rgb(128, 128, 128)",
            }}
          >
            Save this
          </button>
          <span id={name}></span>
        </span>
      </div>
    </div>
  );
}

export default ReactSelectArray;
