import { React, useState } from "react";
import { XCircle } from "react-feather";

function SelectComponent({
  name,
  arr,
  setPieceAtt,
  setPieceDes,
  setSubPiecec,
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

  const [increment, setIncrement] = useState(1);

  // set up option elements from data from db
  let options;

  if (!lock) {
    options = arr.map((e, index) => {
      return (
        <option
          label={
            e.name
              ? "name - " + e.name + " , value - " + e.value
              : "name - " + e.partName + " , " + "stTime - " + e.partStTime
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

  // remove seleted item from array
  const remove = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

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
      <span id={index} key={index}>
        {JSON.stringify(e.name ? e.name : e.partName)}
      </span>
    </div>
  ));

  //
  function onChange(e) {
    // if (
    //   e.target.value !== "" &&
    //   data.filter((i) => {
    //     i != e.target.value;
    //   })
    // ) {
    data.push(JSON.parse(e.target.value));
    setData([...data]);
    // }
  }

  function increm() {
    setIncrement((prev) => prev + 1);
  }

  function decrem() {
    if (increment > 1) {
      setIncrement((prev) => prev - 1);
    }
  }

  return (
    <div className="flex flex-col w-min justify-center">
      <div className=" flex flex-row items-center">
        <select
          disabled={lock}
          onChange={onChange}
          className={`input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 $
          lock ? "text-error focus:text-error" : ""
        }`}
        >
          <option value="">{!lock ? "Pick " + name : "Locked"}</option>
          {options}
        </select>
        <button
          className="btn "
          onClick={(e) => {
            // set data to value
            sendData(data);
            // add clases to amine button
            e.target.classList.add(
              ["motion-preset-shrink"],
              ["bg-info"],
              ["hover:bg-info"],
              ["text-slate-900"]
            );
            setTimeout(() => {
              e.target.classList.remove(
                ["motion-preset-shrink"],
                ["bg-info"],
                ["hover:bg-info"],
                ["text-slate-900"]
              );
            }, 1000);
            setLock(!lock);
          }}
        >
          {lock ? "Unlock" : "Lock"}
        </button>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <button onClick={increm}>+</button>
            <button onClick={decrem}>-</button>
          </div>
          <div className="flex  items-center">{increment}</div>
        </div>
      </div>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default SelectComponent;
