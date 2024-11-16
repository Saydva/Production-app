import React from "react";
import InputData from "../../inputDataNew";

function SubPiece() {
  const property = "subpiece";
  return (
    <div className="objContainer">
      <h4>Subpiece</h4>
      <InputData property={property} />
    </div>
  );
}

export default SubPiece;
