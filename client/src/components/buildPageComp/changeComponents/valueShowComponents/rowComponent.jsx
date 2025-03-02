import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../buildComponents/utils/dataContext";
function RowComponent(props) {
  const [update, setUpdate] = useState(true);
  const [value, setValue] = useState("");
  //   const { dbObject, setDbObject, item } = useContext(DataContext);

  const watch = props.watch;

  useEffect(() => {
    setValue(props.name);
  }, [watch]);

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="flex flex-row items-center ">
        <input
          readOnly={props.readOnly ? props.readOnly : update}
          type="text"
          className={`input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 ${
            update ? "text-error focus:text-error" : ""
          }`}
          value={value}
          onChange={handleInput}
          placeholder="Type here"
        />
        <button
          className="btn"
          onClick={() => {
            !props.readOnly ? setUpdate(!update) : null;
          }}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default RowComponent;
