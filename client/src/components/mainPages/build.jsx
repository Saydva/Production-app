import React, { useState } from "react";
import PieceComponent from "../buildComponents/piece";
import OtherComponents from "../buildComponents/other";
import SubPieceComponent from "../buildComponents/subPiece";

function BuildPage() {
  const piece = <PieceComponent />;
  const subPiece = <SubPieceComponent />;
  const other = <OtherComponents />;
  const [element, setElement] = useState("");

  const renderedComponent = (component) => {
    return component;
  };

  return (
    <div>
      <h4 className="m-3 p-2 border-neutral border-2 w-min min-w-56 rounded-lg ">
        Build Your Data
      </h4>
      <ul className="menu menu-horizontal lg:menu-horizontal bg-base-200 rounded-box mb-2">
        <li>
          <a
            onClick={() => {
              setElement(piece);
            }}
          >
            Piece
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setElement(subPiece);
            }}
          >
            SubPiece
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setElement(subPiece);
            }}
          >
            Model
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              setElement(other);
            }}
          >
            Other
          </a>
        </li>
      </ul>
      {renderedComponent(element)}
      {/* <PieceComponent /> */}
    </div>
  );
}

export default BuildPage;
