import { useEffect, useState } from "react";
import { DataContext } from "./utils/dataContext.js";

import { standartTimeCalc } from "./utils/standartTimecalculator.js";

import axios from "axios";

import RowComponent from "./smallComponents/rowComponent.jsx";
import ArrayComponent from "./smallComponents/arrayComponent.jsx";
import SelectComponent from "./smallComponents/selectRowComponent.jsx";

function PieceComponent() {
  // const that holds property to switch betweeen build pages
  const prop = "piece";

  //set up piece state
  const [piece, setPiece] = useState({
    partName: "",
    partStTime: 0,
    attribute: [],
    description: [],
    operation: [],
  });

  const [modal, setModal] = useState(false);

  const [key, setKey] = useState("");

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

  // handle data from attribute
  const dataFromAtt = (data) => {
    piece.attribute = data;
  };

  // handle datat from description
  const dataFromDes = (data) => {
    piece.description = data;
  };

  // reset object and rerender Ui
  const clean = () => {
    setKey(!key);
    setPiece({
      partName: "",
      partStTime: 0,
      attribute: [],
      description: [],
      operation: [],
    });
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

  // handle standart time from operation obj
  useEffect(() => {
    setPiece({ ...piece, partStTime: timeObj.time });
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
        // console.log(error.response.data.errorResponse.errmsg);
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
  }, []);

  return (
    <div key={key}>
      <div className="flex flex-row">
        <p className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm w-min shadow-md shadow-slate border-2 border-slate-600 border-opacity-10">
          Piece
        </p>
        <span className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20">
          StTime of Piece = {piece.partStTime}
        </span>
        <button
          className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20"
          onClick={clean}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col justify-start">
        <DataContext.Provider value={{ prop, piece, setPiece, obj, setObj }}>
          <RowComponent name={Object.keys(piece)[0]} property={String} />
          <ArrayComponent />
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
        </DataContext.Provider>

        <dialog
          open={modal}
          className="modal modal-bottom sm:modal-middle flex justify-center items-center "
        >
          <div className="modal-box w-56  text-xs rounded-md">
            <p className="py-4">Please set up all properties of your piece!!</p>
            <div className="modal-action">
              <form method="dialog">
                <button
                  onClick={() => setModal(false)}
                  className="h-8 w-10 bg-error text-neutral rounded-lg"
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <button
          className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
          onClick={() => {
            if (piece.partName != "" && piece.operation.length != 0) {
              postData(piece);
              clean();
            } else {
              setModal(true);
            }
          }}
        >
          Send data
        </button>
      </div>
    </div>
  );
}

export default PieceComponent;
