import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../buildComponents/utils/dataContext";

function DataValueShow() {
  const { item } = useContext(DataContext);
  const [dbObject, setDbObject] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
    subPiecec: [],
    attribute: [],
    description: [],
    operation: [],
  });

  useEffect(() => {
    setValue(item.partName);
  }, [item]);

  const [update, setUpdate] = useState(true);

  // change item
  const [value, setValue] = useState(item.partName);

  //handle input item
  const handleInput = (e) => {
    setValue(e.target.item);
  };

  return (
    <>
      <div className="flex flex-row items-center ">
        <input
          readOnly={update}
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
            setUpdate(!update);
            setDbObject({ ...dbObject, partName: value });
          }}
        >
          Update
        </button>
      </div>
    </>
  );
}

export default DataValueShow;
