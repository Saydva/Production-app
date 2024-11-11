import React, { useState } from "react";
import Select from "react-select";
import models from "../../../../src/test_components/testingObjects/testProdObj";

function SearchBarSelect() {
  const arr = models.map((e) => {
    return { value: e.modelName, label: e.modelName };
  });
  arr.push({ value: "", label: "" });
  console.log(arr);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "400px",
      borderRadius: "8px",
      boxShadow: "none",
      textAlign: "left",
    }),

    options: (provided, state) => ({
      ...provided,
      color: "green",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
  };

  const [picked, setPicked] = useState("");

  return (
    <div className="serchContainer">
      <Select
        options={arr}
        styles={customStyles}
        isMulti
        onChange={(option) => setPicked(option)}
      />
      <h1>{picked.length}</h1>
    </div>
  );
}

export default SearchBarSelect;
