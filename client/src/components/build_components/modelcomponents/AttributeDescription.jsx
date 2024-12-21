import React from "react";

// inputData use property to render component properly, all basic components are one component
import InputData from "../../inputData";

function AttributeDescription() {
  const property = "attribudescript";

  return (
    <div className="objContainer">
      <h4>Attribute and Desciption</h4>
      <InputData property={property} />
    </div>
  );
}

export default AttributeDescription;
