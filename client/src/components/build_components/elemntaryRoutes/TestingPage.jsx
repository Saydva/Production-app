import React, { useEffect, useState } from "react";
import ReactSelectText from "../buildDataComponents/TextControl";
import ReactSelectOperation from "../buildDataComponents/OperationControl";
import ReactSelectArray from "../buildDataComponents/ArrayControl";

function Test() {
  const [dataFromOperation, setDataFromOperation] = useState("");

  const handleDataFromOperation = (data) => {
    setDataFromOperation(data);
  };

  useEffect(() => {
    if (dataFromOperation) {
      console.log(dataFromOperation);
    }
  }, [dataFromOperation]);

  return (
    <div className="objContainer">
      <h4>Test</h4>
      <ReactSelectOperation
        name1={"First name"}
        name2={"Last name"}
        OperationObj={handleDataFromOperation}
      />
    </div>
  );
}

export default Test;
