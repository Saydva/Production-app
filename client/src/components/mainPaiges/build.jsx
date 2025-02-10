import React from "react";
import PieceComponent from "../buildComponents/piece";

function BuildPage() {
  console.log("render ");
  return (
    <div>
      <h4 className="m-3 p-2 border-neutral border-2 w-min min-w-56 rounded-lg ">
        Build Your Data
      </h4>
      <PieceComponent />
    </div>
  );
}

export default BuildPage;
