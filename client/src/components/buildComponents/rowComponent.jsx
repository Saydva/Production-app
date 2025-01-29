import React, { useEffect, useState } from "react";
import { CheckCircle } from "react-feather";
function RowComponent(props) {
  const name = props.name;
  const changeObj = props.changeObj;

  const [value, setValue] = useState("");

  let bool = false;

  const changeColor = (e) => {
    bool = !bool;
    if (bool) {
      e.target.classList.add("bg-slate-600");
    } else {
      e.target.classList.remove("bg-slate-600");
    }
  };

  const setvalue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    changeObj(value);
  }, [value]);

  // console.log(value, name);

  return (
    <div className="flex flex-col justify-start gap-3 00">
      <h4 className="pl-2">Build Your Data</h4>
      <div>
        <input
          onChange={setvalue}
          type="text"
          placeholder="Name of your part"
          className="input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3"
        />
        <button className="btn btn-xs p-0 rounded-xl" onClick={changeColor}>
          <CheckCircle className="flex p-0 rounded-xl" />
        </button>
      </div>
    </div>
  );
}

export default RowComponent;
