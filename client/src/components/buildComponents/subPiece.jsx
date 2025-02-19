import { useEffect, useRef, useState } from "react";
import { DataContext } from "./utils/dataContext";
import { standartTimeCalc } from "./utils/standartTimecalculator.js";

import RowComponent from "../buildComponents/rowComponent";
import ArrayComponent from "./arrayComponent";
import SelectComponent from "./selectRowComponent.jsx";

function SubPieceComponent() {
  // const that holds property to switch betweeen build pages
  const prop = "subPiece";
  //set up piece state
  const [subPiece, setSubPiece] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
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

  const dataFromPiecec = (data) => {
    subPiece.piecec = data;
    console.log(data, subPiece);
  };

  const dataFromAtt = (data) => {
    subPiece.attribute = data;
    console.log(data, subPiece);
  };

  const dataFromDes = (data) => {
    subPiece.description = data;
    console.log(data, subPiece);
  };

  // modal when something is missing

  const modal = useRef();

  const openModal = () => {
    modal.showModal();
  };

  // push operation obj in piece.oparation
  useEffect(() => {
    if (obj.name && obj.stTime) {
      setSubPiece({ ...subPiece, operation: [obj] });
    }
  }, [obj]);

  //if object properties are all call function to calculate stTime
  useEffect(() => {
    if (subPiece.partName != "" && subPiece.operation.length != 0) {
      const time = standartTimeCalc(subPiece);
      setTimeObj({ ...timeObj, time: time });
    }
  }, [subPiece, obj.stTime]);

  useEffect(() => {
    setSubPiece({ ...subPiece, partStTime: timeObj.time });
  }, [timeObj.time]);

  return (
    <>
      <div className="flex flex-row">
        <p className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm w-min shadow-md shadow-slate border-2 border-slate-600 border-opacity-10">
          SubPiece
        </p>
        <span className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20">
          StTime of SubPiece = {subPiece.partStTime}
        </span>
      </div>
      <div className="flex flex-col justify-start">
        <DataContext.Provider
          value={{ prop, subPiece, setSubPiece, obj, setObj }}
        >
          <RowComponent name={Object.keys(subPiece)[0]} property={String} />

          <ArrayComponent />
          <SelectComponent name={"piecec"} setSubPiecec={dataFromPiecec} />

          <SelectComponent name={"attribute"} setPieceAtt={dataFromAtt} />
          <SelectComponent name={"description"} setPieceDes={dataFromDes} />

          <button
            className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (subPiece.partName != "" && subPiece.operation.length != 0) {
                console.log(subPiece);
              } else {
                openModal();
              }
            }}
          >
            Send data
          </button>
          <dialog
            ref={modal}
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

export default SubPieceComponent;
