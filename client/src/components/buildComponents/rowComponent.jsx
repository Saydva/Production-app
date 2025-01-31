import React, { useEffect, useState } from "react";
import { Save, X, XSquare } from "react-feather";
function RowComponent(props) {
  const name = props.name;
  const changeObj = props.changeObj;

  const [lock, setLock] = useState(false);

  const [value, setValue] = useState("");

  const setvalue = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  useEffect(() => {
    changeObj(value);
  }, [value]);

  return (
    <div
      className={`flex ${
        lock ? "flex-row-reverse" : "flex-row"
      } justify-evenly w-min`}
    >
      <input
        readOnly={lock}
        onChange={setvalue}
        type="text"
        placeholder="Name of your part"
        className="input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 "
      />
      <button
        className="btn my-3"
        onClick={(e) => {
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
        {lock ? (
          <XSquare pointerEvents={"none"} />
        ) : (
          <Save pointerEvents={"none"} />
        )}
      </button>
    </div>
  );
}

export default RowComponent;
