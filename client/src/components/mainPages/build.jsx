import React, { useState } from "react";
import PieceComponent from "../buildPageComp/piece";
import AdditionalFeatures from "../buildPageComp/additionFeatures";
import SubPieceComponent from "../buildPageComp/subPiece";
import ModelComponent from "../buildPageComp/model";

function BuildPage() {
  const [element, setElement] = useState("");
  const [reset, setReset] = useState("");

  const dataFromChild = (data) => {
    setReset(data);
  };

  const piece = <PieceComponent />;
  const subPiece = <SubPieceComponent />;
  const model = <ModelComponent />;
  const other = <AdditionalFeatures />;

  const renderedComponent = (component) => {
    return component;
  };

  return (
    <div key={reset}>
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
              setElement(model);
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
    </div>
  );
}

export default BuildPage;
