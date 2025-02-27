import { useEffect, useState } from "react";
import { DataContext } from "./utils/dataContext";
import { standartTimeCalc } from "./utils/standartTimecalculator.js";

import RowComponent from "../buildComponents/rowComponent";
import ArrayComponent from "./arrayComponent";
import SelectComponent from "./selectRowComponent.jsx";
import axios from "axios";

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

  const [modal, setModal] = useState(false);

  //control stTime of object
  const [timeObj, setTimeObj] = useState({
    time: 0,
  });

  //set up operation arr
  const [obj, setObj] = useState({
    name: null,
    stTime: null,
  });

  // handle fetch back created data from db
  const [attribute, setAttribute] = useState([]);
  const [description, setDescription] = useState([]);
  const [piece, setPiece] = useState([]);

  // handle data from piecec db
  const dataFromPiecec = (data) => {
    setSubPiece({ ...subPiece, piecec: data });
  };

  // handle data from attribute
  const dataFromAtt = (data) => {
    subPiece.attribute = data;
  };

  // handle data from desciton
  const dataFromDes = (data) => {
    subPiece.description = data;
  };

  // push operation obj in piece.oparation
  useEffect(() => {
    if (obj.name && obj.stTime) {
      setSubPiece({ ...subPiece, operation: [obj] });
    }
  }, [obj]);

  //if object properties are all call function to calculate stTime
  useEffect(() => {
    if (subPiece.partName != "") {
      const time = standartTimeCalc(subPiece);
      setTimeObj({ ...timeObj, time: time });
    }
  }, [subPiece]);

  // handle standart time from operation obj
  useEffect(() => {
    setSubPiece({ ...subPiece, partStTime: timeObj.time });
  }, [timeObj.time]);

  // const to handle axios url
  const postUrl = (prop) => {
    return "http://localhost:3000/" + prop;
  };

  // handle post axios
  const postData = async (object) => {
    await axios
      .post(postUrl(prop), object)
      .then((response) => {
        console.log(response, object);
      })
      .catch((error) => {
        // console.log(error.response.data.errorResponse.errmsg); - errormsg
        console.log(error);
      });
  };

  // handle axios get data
  const getData = async (name, setdata) => {
    await axios
      .get(postUrl(name))
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData("attributes", setAttribute);
    getData("descriptions", setDescription);
    getData("pieces", setPiece);
  }, []);

  console.log(subPiece);

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
          <SelectComponent
            name={"piecec"}
            setSubPiecec={dataFromPiecec}
            arr={piece}
          />

          <SelectComponent
            name={"attribute"}
            setPieceAtt={dataFromAtt}
            arr={attribute}
            hidden
          />
          <SelectComponent
            name={"description"}
            setPieceDes={dataFromDes}
            arr={description}
            hidden
          />

          <button
            className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (
                subPiece.partName != "" &&
                subPiece.operation.length != 0 &&
                subPiece.piecec.length >= 1
              ) {
                postData(subPiece);
              } else {
                setModal(true);
              }
            }}
          >
            Send data
          </button>
          <dialog
            open={modal}
            className="modal modal-bottom sm:modal-middle flex justify-center items-center "
          >
            <div className="modal-box w-56  text-xs rounded-md">
              <p className="py-4">
                Please set up all properties of your piece!!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button
                    className="h-8 w-10 bg-error text-neutral rounded-lg"
                    onClick={() => setModal(false)}
                  >
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
