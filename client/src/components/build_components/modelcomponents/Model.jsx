import React from "react";
import InputData from "../../inputData";

function Model() {
  const property = "model";
  return (
    <div className="objContainer">
      <h4>Model</h4>
      <InputData property={property} />
    </div>
  );
}

export default Model;
