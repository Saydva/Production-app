import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../buildComponents/utils/dataContext";
function RowValueComponent(props) {
  const [update, setUpdate] = useState(true);

  const { dbObject, setDbObject } = useContext(DataContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(props.name);
  }, [dbObject]);

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
            !props.readOnly
              ? setUpdate(!update) ||
                setDbObject({ ...dbObject, partName: value })
              : null;
          }}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default RowValueComponent;
