import React, { useState, useEffect } from "react";
import { DataContext } from "../buildComponents/utils/dataContext";
import { PlusSquare } from "react-feather";

import SelectComponent from "../buildComponents/selectRowComponent";

function Test() {
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

  const options = ["a", "b", "c", "d"];

  const component = <SelectComponent arr={options} />;

  const [components, setComponents] = useState([]);

  function getUID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
  }

  console.log(components);

  return (
    <>
      <div className="flex flex-row"></div>
      <div className="flex flex-col justify-start">
        <DataContext.Provider value={{ piece, setPiece, obj, setObj }}>
          {components.map((e) => e)}
          <SelectComponent arr={options} />
          <button
            className="ml-3 w-min"
            onClick={() => {
              setComponents([
                ...components,
                <li key={getUID()} id={getUID()}>
                  {component}
                  <button
                    onClick={(e) => {
                      console.log(e.target.id);
                    }}
                  >
                    x
                  </button>
                </li>,
              ]);
            }}
          >
            <PlusSquare
              pointerEvents={"none"}
              height={64}
              width={64}
              strokeWidth={1}
              stroke="grey"
            />
          </button>

          <button
            className="btn w-min min-w-36 rounded-md bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (piece.partName != "" && piece.operation.length != 0) {
                console.log(JSON.stringify(piece));
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

export default Test;
