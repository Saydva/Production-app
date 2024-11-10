import React from "react";

function ObjOperationsResult(props) {
  const operations = JSON.stringify(props);
  return (
    <>
      <p>{operations}</p>
    </>
  );
}

export default ObjOperationsResult;
