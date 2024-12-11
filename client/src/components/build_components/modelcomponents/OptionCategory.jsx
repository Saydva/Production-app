import React from "react";

// inputData use property to render component properly, all basic components are one component
import InputData from "../../inputData";

function OptionCategoty() {
  const property = "optionCategory";

  return (
    <div className="objContainer">
      <h4>Option and Category</h4>
      <InputData property={property} />
    </div>
  );
}

export default OptionCategoty;
