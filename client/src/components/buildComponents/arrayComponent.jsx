import React from "react";
import RowComponent from "./rowComponent";

function ArrayComponent() {
  return (
    <div>
      <RowComponent name={"name"} property={String} array={"operation"} />
      <RowComponent name={"stTime"} property={Number} array={"operation"} />
    </div>
  );
}

export default ArrayComponent;
