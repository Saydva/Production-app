import { React, useState } from "react";
import { XCircle } from "react-feather";

function SelectComponent({
  name,
  arr,
  setPieceAtt,
  setPieceDes,
  setSubPiecec,
  hidden,
}) {
  let sendData = setPieceAtt
    ? setPieceAtt
    : null || setPieceDes
    ? setPieceDes
    : null || setSubPiecec
    ? setSubPiecec
    : null;

  const [lock, setLock] = useState(false);
  const [data, setData] = useState([]);

  // animate element
  const [anime, setAnime] = useState(false);

  // multiply selected object
  const [increment, setIncrement] = useState(1);

  // increment pushed objects in parent array
  function increm() {
    setIncrement((prev) => prev + 1);
  }

  // decrement pushed objects in parent array
  function decrem() {
    if (increment > 1) {
      setIncrement((prev) => prev - 1);
    }
  }

  // send data from select to parent
  function onChange(e) {
    const repeat = (arr, n) => Array(n).fill(arr).flat();
    data.unshift(repeat([JSON.parse(e.target.value)], increment));
    setIncrement(1);
    setData([...data]);
  }

  // remove seleted item from array
  const remove = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  // set up option elements from data from db
  let options;

  if (!lock) {
    options = arr.map((e, index) => {
      return (
        <option
          label={
            e.name
              ? e.name + " , value - " + e.value
              : e.partName + " , " + "stTime - " + e.partStTime
          }
          className="m-2 rounded-full"
          value={JSON.stringify(e)}
          key={index}
        >
          {JSON.stringify(e)}
        </option>
      );
    });
  }

  // show list of selected items under select
  const list = data.map((e, index) => (
    <div
      key={index}
      role="alert"
      className="alert alert-success ml-3 mb-3 w-min p-2 flex"
    >
      <button
        id={index}
        onClick={(e) => {
          if (!lock) {
            remove(e.target.id);
          }
        }}
      >
        <XCircle />
      </button>
      <span id={index} key={index} className="w-40">
        {JSON.stringify(
          e[0].name
            ? e[0].name + ", value: " + e[0].value
            : "name : " + e[0].partName + ",stTime: " + e[0].partStTime
        )}
      </span>
      <span className=" border-green-400 border-2 px-2 rounded-lg">
        {e.length}
      </span>
    </div>
  ));

  return (
    <div className="flex flex-col w-min justify-center">
      <div className=" flex flex-row items-center">
        <select
          disabled={lock}
          onChange={onChange}
          className={`select 
            input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 ${lock} ? "text-error focus:text-error" : ""
        }`}
        >
          <option>{!lock ? "Pick " + name : "Locked"}</option>
          {options}
        </select>
        <button
          className={`btn ${
            anime
              ? "bg-info motion-preset-shrink hover:bg-info text-slate-900"
              : ""
          }}`}
          onClick={() => {
            // add clases to amine button
            setAnime(true);
            setTimeout(() => {
              setAnime(false);
            }, 1000);
            setLock(!lock);
            // set data to value
            sendData(data);
          }}
        >
          {lock ? "Unlock" : "Lock"}
        </button>
        <div className={`${hidden ? "hidden " : "flex "} flex-row`}>
          <div className="flex flex-col">
            <button
              className="bg-base-200 h-5 w-min-5 p-1 m-1 border-neutral-400 pb-2 border-2 flex justify-center items-center rounded-sm"
              onClick={increm}
            >
              +
            </button>
            <button
              className="bg-base-200 h-5 w-min-5 p-1 m-1 border-neutral-400 pb-2 border-2 flex justify-center items-center rounded-sm"
              onClick={decrem}
            >
              -
            </button>
          </div>
          <div className="flex items-center">{increment}</div>
        </div>
      </div>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default SelectComponent;
