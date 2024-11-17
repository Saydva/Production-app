import React, { useState } from "react";
import ReactSelectText from "../buildDataComponents/TextControl";
import ReactSelectOperation from "../buildDataComponents/OperationControl";
import ReactSelectArray from "../buildDataComponents/ArrayControl";

function Test() {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(dataFromChild);
  };
  return (
    <div className="objContainer">
      <h4>Test</h4>
      <ReactSelectText
        name={"testing"}
        valueOf={String()}
        callback={String}
        sendDataToParent={handleDataFromChild}
      />
    </div>
  );
}

export default Test;
