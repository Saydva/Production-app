import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactSelectArray from "./build_components/buildDataComponents/ArrayControl";
import ReactSelectText from "./build_components/buildDataComponents/TextControl";
import ReactSelectOperation from "./build_components/buildDataComponents/OperationControl";
import ReactaAtributeDescription from "./build_components/buildDataComponents/AttributeDescription.jsx";

import {
  standartTimeCalc,
  incrementerObj,
} from "../components/build_components/exeternalFunctions.js";
import "./css/simple.css";

function InputData(props) {
  const property = props.property;

  // result.message from axios useState

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  //obj to store data

  const [obj, setObj] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
    subPiecec: [],
    attribute: [],
    description: [],
    operation: [],
  });

  // template to clear obj properties after sending to db

  const [template] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
    subPiecec: [],
    attribute: [],
    description: [],
    operation: [],
  });
  // implement axios

  const postUrl = (property) => {
    const url = property;
    return "http://localhost:3000/" + url;
  };

  //and finaly post obj to mongodb

  let postData = async () => {
    await axios
      .post(postUrl(property), obj)
      .then((response) => {
        setResult(response.statusText);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //fetch datat from db to components

  const [dataDbAttribute, setDataDbAttribute] = useState("");
  const [dataDbDesc, setDataDbDesc] = useState("");
  const [dataDbPiece, setDataDbPiece] = useState("");
  const [dataDbSub, setDataDbSub] = useState("");

  const fetchDataOpt = async () => {
    await axios
      .get(`http://localhost:3000/atributes`)
      .then((response) => {
        setDataDbAttribute(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const fetchDataCat = async () => {
    await axios
      .get(`http://localhost:3000/descriptions`)
      .then((response) => {
        setDataDbDesc(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const fetchDataPiece = async () => {
    await axios
      .get(`http://localhost:3000/pieces`)
      .then((response) => {
        setDataDbPiece(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const fetchDataSub = async () => {
    await axios
      .get(`http://localhost:3000/subPieces`)
      .then((response) => {
        setDataDbSub(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const [check, setCheck] = useState(false);

  const fetchConnection = async () => {
    await axios
      .get("http://localhost:3000/connection")
      .then((response) => {
        setResult(response.data.message);
        setCheck(true);
        setError("")
      })
      .catch((error) => {
        setError(error.message);
        setResult("")
      });
  };

 

  useEffect(() => {
    if (check == false) {
      setInterval(() => {
        fetchConnection();
      }, 1000);
    }

    // fetchDataOpt();
    // fetchDataCat();
    // fetchDataPiece();
    // fetchDataSub();
  }, []);

  console.log(check);
  console.log(result);


  // handle inputs data

  // data from text input
  const handleDataFromText = (childData, name) => {
    if (childData) {
      setObj({ ...obj, partName: childData });
    }
  };

  // data from operations inputs

  const handleDataOperations = (childData, name) => {
    obj[name].push(childData);
    if (childData) {
      const set = standartTimeCalc(obj);
      setObj({ ...obj, partStTime: set });
    }
  };

  // data from React-Select input

  const handleDataSelect = (childData, name) => {
    if (name == "piecec" || name == "subPiecec") {
      incrementerObj(childData, obj[name], count);
      setUsed(true);
    } else {
      obj[name].push(childData);
      if (childData) {
        setObj({ ...obj });
      }
    }

    // obj[name].push(childData);
  };

  // handle data from Option and category

  const [atributeData, setAtributeData] = useState({});
  const [descriptionData, setDescriptionData] = useState({});

  const handleOptAttribCatData = (childData, name) => {
    if (name == "attribute") {
      setAtributeData(childData);
    }
    if (name == "description") {
      setDescriptionData(childData);
    }
  };

  // handle data to database from components - piece, subPiece, model

  const handleDb = (e) => {
    e.preventDefault();
    postData(obj);
    setObj(template);
    console.log(JSON.stringify(obj));
  };

  // handle data to database from option and

  let postAttDes = async (data, urlData) => {
    await axios
      .post(urlData, data)
      .then((response) => {
        setResult(JSON.stringify(response.statusText));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  function objectNotEmpty(object) {
    return Object.values(object) != 0;
  }

  const handleDbAttribDescrip = (e) => {
    e.preventDefault();
    if (objectNotEmpty(atributeData)) {
      postAttDes(atributeData, postUrl("attribute"));
    }
    if (objectNotEmpty(descriptionData)) {
      postAttDes(descriptionData, postUrl("description"));
    }
    setAtributeData({});
    setDescriptionData({});
  };

  // first remove falsy(unused) keys from obj

  let delKeys = [];

  if (property == "piece") {
    delKeys = ["piecec", "subPiecec"];
    deleteObjKeys(obj, delKeys);
  } else if (property == "subpiece") {
    delKeys = ["subPiecec"];
    deleteObjKeys(obj, delKeys);
  }

  function deleteObjKeys(o, arr) {
    arr.forEach((element) => {
      delete o[element];
    });
  }

  // component to render list of obj values

  const list = Object.values(obj).map((e, i) => {
    return (
      <li key={i} className="br">
        {JSON.stringify(e)}
      </li>
    );
  });

  //component to increase quantity
  const [count, setCount] = useState(1);
  const [used, setUsed] = useState(false);

  if (used === true) {
    setUsed(false);
    setCount(1);
  }

  function Count() {
    // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

    function increment(e) {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

    function decrement(e) {
      setCount(function (prevCount) {
        if (prevCount > 2) {
          return (prevCount -= 1);
        } else {
          return (prevCount = 1);
        }
      });
    }

    function empty(e) {
      e.preventDefault();
      e.target.value = "";
    }

    function handleCount(e) {
      if (Number(e.target.value)) {
        setCount(Number(e.target.value));
      }
    }

    return (
      <div className="wraper row gapRow">
        <label htmlFor="count" className="label">
          Qty element
        </label>
        <input
          id="count"
          type="text"
          defaultValue={count}
          onBlur={handleCount}
          onFocus={empty}
        />
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }

  // returning elements depending on the property witch comes wit selected route

  const PieceElement = () => {
    return (
      <div className="wraper row gapRow">
        <div className="wraper column gapCol">
          <ReactSelectText
            name={Object.keys(obj)[0]}
            handleData={handleDataFromText}
          />

          <ReactSelectText
            name={Object.keys(obj)[1]}
            num={Object.values(obj)[1]}
            settingFromParent={true}
          />
          <ReactSelectArray
            name={Object.keys(obj)[2]}
            handleData={handleDataSelect}
            dataDescription={dataDbDesc}
          />
          <ReactSelectArray
            name={Object.keys(obj)[3]}
            handleData={handleDataSelect}
            dataAttribute={dataDbAttribute}
          />
          <ReactSelectOperation
            name1={"operation"}
            name2={"stTime"}
            name={Object.keys(obj)[4]}
            handleData={handleDataOperations}
          />
        </div>
        <div className="wraper min column justify-between gapCol">{list}</div>
        <div className="wraper columnR justify-between max">
          <button className="btn" onClick={handleDb}>
            Send To db
          </button>
          <div>
            {result == "" ? (<p></p>) : (<p className="succes pd br1"> Message: <br />{JSON.stringify(result)}</p>)}
            {error == "" ? <p></p> : <p className="error br1 pd">Error: <br />{JSON.stringify(error)}</p>}
          </div>
        </div>
      </div>
    );
  };

  const SubPieceElemet = () => {
    return (
      <div className="wraper column gapCol">
        <div className="wraper row gapRow">
          <div className="wraper column gapCol">
            <ReactSelectText
              name={Object.keys(obj)[0]}
              handleData={handleDataFromText}
            />
            <ReactSelectText
              name={Object.keys(obj)[1]}
              num={Object.values(obj)[1]}
              settingFromParent={true}
            />
            <ReactSelectArray
              name={Object.keys(obj)[2]}
              handleData={handleDataSelect}
              dataPiece={dataDbPiece}
            />
            <ReactSelectArray
              name={Object.keys(obj)[3]}
              handleData={handleDataSelect}
              dataDescription={dataDbDesc}
            />
            <ReactSelectArray
              name={Object.keys(obj)[4]}
              handleData={handleDataSelect}
              dataDescription={dataDbDesc}
            />
            <ReactSelectOperation
              name1={"operation"}
              name2={"stTime"}
              name={Object.keys(obj)[5]}
              handleData={handleDataOperations}
            />
          </div>
          <div className="wraper min column justify-between gapCol">{list}</div>
          <div className="wraper"></div>
          <div className="wraper columnR justify-between max">
            <button className="btn" onClick={handleDb}>
              Send To db
            </button>
            <div>
            {result == "" ? (<p></p>) : (<p className="succes br1 pd"> Message: <br />{JSON.stringify(result)}</p>)}
            {error == "" ? <p></p> : <p className="error br1 pd">Error: <br />{JSON.stringify(error)}</p>}
          </div>
          </div>
        </div>
        <div className="wraper row">
          <Count />
        </div>
      </div>
    );
  };

  const ModelElement = () => {
    return (
      <div className="wraper column gapCol">
        <div className="wraper row gapRow">
          <div className="wraper column gapCol">
            <ReactSelectText
              name={Object.keys(obj)[0]}
              handleData={handleDataFromText}
            />
            <ReactSelectText
              name={Object.keys(obj)[1]}
              num={Object.values(obj)[1]}
              settingFromParent={true}
            />

            <ReactSelectArray
              name={Object.keys(obj)[2]}
              handleData={handleDataSelect}
              dataPiece={dataDbPiece}
            />
            <ReactSelectArray
              name={Object.keys(obj)[3]}
              handleData={handleDataSelect}
              dataSubPiece={dataDbSub}
            />
            <ReactSelectArray
              name={Object.keys(obj)[4]}
              handleData={handleDataSelect}
              dataSubPiece={dataDbSub}
            />
            <ReactSelectArray
              name={Object.keys(obj)[5]}
              handleData={handleDataSelect}
              dataSubPiece={dataDbSub}
            />
            <ReactSelectOperation
              name1={"operation"}
              name2={"stTime"}
              name={Object.keys(obj)[6]}
              handleData={handleDataOperations}
            />
          </div>
          <div className="wraper min column justify-between gapCol">{list}</div>
          <div className="wraper"></div>
          <div className="wraper columnR justify-between max">
            <button className="btn" onClick={handleDb}>
              Send To db
            </button>
            <div>
            {result == "" ? (<p></p>) : (<p className="succes br1 pd"> Message: <br />{JSON.stringify(result)}</p>)}
            {error == "" ? <p></p> : <p className="error br1 pd">Error: <br />{JSON.stringify(error)}</p>}
          </div>
          </div>
        </div>
        <div className="wraper row">
          <Count />
        </div>
      </div>
    );
  };

  const AttDescriptResult = () => {
    return (
      <div className="wraper column justify-between ">
        <h4>Attribute data</h4>
        <div className="wraper column gapCol">
          <div className="myInput bo br">Name: {atributeData.name}</div>
          <div className="myInput bo br">Value: {atributeData.value}</div>
        </div>
        <h4>Description data</h4>
        <div className="wraper column gapCol">
          <div className="myInput bo br">Name: {descriptionData.name}</div>
          <div className="myInput bo br">Value: {descriptionData.value}</div>
        </div>
      </div>
    );
  };

  const AttDescription = () => {
    return (
      <div className="wraper column">
        <div className="wraper row gapRow">
          <ReactaAtributeDescription handleData={handleOptAttribCatData} />
          <AttDescriptResult />
          <div className="wraper column justify-between max">
          <div>
            {result == "" ? (<p></p>) : (<p className="succes br1 pd"> Message: <br />{JSON.stringify(result)}</p>)}
            {error == "" ? <p></p> : <p className="error br1 pd">Error: <br />{JSON.stringify(error)}</p>}
          </div>
            <button className="btn" onClick={handleDbAttribDescrip}>
              Send To db
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (property == "piece") {
    return <PieceElement />;
  } else if (property == "subpiece") {
    return <SubPieceElemet />;
  } else if (property == "model") {
    return <ModelElement />;
  } else if (property == "attribudescript") {
    return <AttDescription />;
  }
}

export default InputData;
