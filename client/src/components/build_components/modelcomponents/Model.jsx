import React from "react";

// inputData use property to render component properly, all basic components are one component
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
