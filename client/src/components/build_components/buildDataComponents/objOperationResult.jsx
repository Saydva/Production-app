import React from "react";

function ObjOperationsResult(props) {
  const value = props;
  return (
    <>
      <p>{JSON.stringify(value.opertions)}</p>
    </>
  );
}

export default ObjOperationsResult;
