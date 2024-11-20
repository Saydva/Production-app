import React, { useEffect, useState } from "react";
import ReactSelectText from "../buildDataComponents/TextControl";
import ReactSelectOperation from "../buildDataComponents/OperationControl";
import ReactSelectArray from "../buildDataComponents/ArrayControl";

function Test() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    if (dataFromChild) {
      console.log(dataFromChild);
    }
  }, [dataFromChild]);

  return (
    <div className="objContainer">
      <h4>Test</h4>
      <ReactSelectOperation
        name1={"First name"}
        name2={"Last name"}
        childObj={handleDataFromChild}
      />
    </div>
  );
}

export default Test;
