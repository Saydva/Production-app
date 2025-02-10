import { React, useState } from "react";

function SelectComponent(props) {
  const [lock, setLock] = useState(false);
  const arr = props.arr.map((e, index) => <option key={index}>{e}</option>);

  return (
    <div className="flex flex-row items-center">
      <div
        className={`w-full shadow-md shadow-slate-500 motion-preset-slide-right m-3 max-w-xs
          ${lock ? "text-error focus:text-error" : ""}`}
      >
        <select
          className="select select-secondary w-full "
          disabled={lock ? true : false}
        >
          <option defaultValue={"selected"}>Pick your favorite language</option>
          {arr}
        </select>
      </div>
      <button
        onClick={(e) => {
          setLock(!lock);
          e.target.HTMLtext = "un lock";
        }}
        className="btn w-min min-w-16 rounded-md  bg-slate-400 bg-opacity-30 text-current"
      >
        Save
      </button>
    </div>
  );
}

export default SelectComponent;
