import { useEffect, useState } from "react";
import { DataContext } from "./utils/dataContext";
import { standartTimeCalc } from "./utils/standartTimecalculator.js";

import RowComponent from "../buildComponents/rowComponent";
import ArrayComponent from "./arrayComponent";
import SelectComponent from "./selectRowComponent.jsx";
import axios from "axios";

function ModelComponent() {
  // const that holds property to switch betweeen build pages
  const prop = "model";

  //set up piece state
  const [model, setModel] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
    subPiecec: [],
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
  const [piece, setPiece] = useState([]);
  const [subPiece, setSubPiece] = useState([]);

  // handle pieec from db
  const dataFromPiecec = (data) => {
    setModel({ ...model, piecec: data });
  };

  // handle subPiecec from db
  const dataFromSubPiecec = (data) => {
    setModel({ ...model, subPiecec: data });
  };

  // handle data from attaribute
  const dataFromAtt = (data) => {
    model.attribute = data;
    console.log(data, model);
  };

  // handle data from description
  const dataFromDes = (data) => {
    model.description = data;
    console.log(data, model);
  };

  // reset object and rerender Ui
  const clean = () => {
    setKey(!key);
    setModel({
      partName: "",
      partStTime: 0,
      piecec: [],
      subPiecec: [],
      attribute: [],
      description: [],
      operation: [],
    });
  };

  // push operation obj in piece.oparation
  useEffect(() => {
    if (obj.name && obj.stTime) {
      setModel({ ...model, operation: [obj] });
    }
  }, [obj]);

  //if object properties are all call function to calculate stTime
  useEffect(() => {
    const time = standartTimeCalc(model);
    setTimeObj({ ...timeObj, time: time });
  }, [model]);

  //handle standart time from operation object
  useEffect(() => {
    setModel({ ...model, partStTime: timeObj.time });
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
    getData("subpieces", setSubPiece);
  }, []);

  return (
    <div key={key}>
      <div className="flex flex-row">
        <p className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm w-min shadow-md shadow-slate border-2 border-slate-600 border-opacity-10">
          Model
        </p>
        <span className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20">
          StTime of Model = {model.partStTime}
        </span>
        <button
          className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20"
          onClick={clean}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col justify-start">
        <DataContext.Provider value={{ prop, model, setModel, obj, setObj }}>
          <RowComponent name={Object.keys(model)[0]} property={String} />

          <ArrayComponent />
          <SelectComponent
            name={"piecec"}
            setSubPiecec={dataFromPiecec}
            arr={piece}
          />
          <SelectComponent
            name={"subPiecec"}
            setPieceAtt={dataFromSubPiecec}
            arr={subPiece}
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
                model.partName != "" &&
                model.operation.length != 0 &&
                model.piecec.length >= 1 &&
                model.subPiecec.length >= 1
              ) {
                postData(model);
                clean();
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
    </div>
  );
}

export default ModelComponent;
