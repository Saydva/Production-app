import { useEffect, useState } from "react";
import { DataContext } from "./utils/dataContext";
import { standartTimeCalc } from "./utils/standartTimecalculator.js";

import RowComponent from "../buildComponents/rowComponent";
import ArrayComponent from "./arrayComponent";
import SelectComponent from "./selectRowComponent.jsx";

function PieceComponent() {
  //set up piece state
  const [piece, setPiece] = useState({
    partName: "",
    partStTime: 0,
    attribute: [],
    description: [],
    operation: [],
  });

  //control stTime of object
  const [timeObj, setTimeObj] = useState({
    time: 0,
  });

  //set up operation arr
  const [obj, setObj] = useState({
    name: null,
    stTime: null,
  });

  const dataFromAtt = (data) => {
    piece.attribute = data;
    console.log(data, piece);
  };

  const dataFromDes = (data) => {
    piece.description = data;
    console.log(data, piece);
  };
  // modal when somthing is missing
  const openModal = () => {
    var modal = document.querySelector(`#noObj`);
    modal.showModal();
  };

  // push operation obj in piece.oparation
  useEffect(() => {
    if (obj.name && obj.stTime) {
      setPiece({ ...piece, operation: [obj] });
    }
  }, [obj]);

  //if object properties are all call function to calculate stTime
  useEffect(() => {
    if (piece.partName != "" && piece.operation.length != 0) {
      const time = standartTimeCalc(piece);
      setTimeObj({ ...timeObj, time: time });
    }
  }, [piece, obj.stTime]);

  useEffect(() => {
    setPiece({ ...piece, partStTime: timeObj.time });
  }, [timeObj.time]);

  return (
    <>
      <div className="flex flex-row">
        <p className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm w-min shadow-md shadow-slate border-2 border-slate-600 border-opacity-10">
          Piece
        </p>
        <span className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20">
          StTime of Piece = {piece.partStTime}
        </span>
      </div>
      <div className="flex flex-col justify-start">
        <DataContext.Provider value={{ piece, setPiece, obj, setObj }}>
          <RowComponent name={Object.keys(piece)[0]} property={String} />

          <ArrayComponent />
          <SelectComponent name={"attribute"} setPieceAtt={dataFromAtt} />
          <SelectComponent name={"description"} setPieceDes={dataFromDes} />

          <button
            className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (piece.partName != "" && piece.operation.length != 0) {
                console.log(piece);
              } else {
                openModal();
              }
            }}
          >
            Send data
          </button>
          <dialog
            id={"noObj"}
            className="modal modal-bottom sm:modal-middle flex justify-center items-center "
          >
            <div className="modal-box w-56  text-xs rounded-md">
              <p className="py-4">
                Please set up all properties of your piece!!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="h-8 w-10 bg-error text-neutral rounded-lg">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </DataContext.Provider>
      </div>
    </>
  );
}

export default PieceComponent;
