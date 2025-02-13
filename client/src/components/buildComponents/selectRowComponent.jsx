import { React, useEffect, useState } from "react";
import { XCircle } from "react-feather";

function SelectComponent() {
  const array = [
    { name: "one", set: 1 },
    { name: "two", set: 2 },
    { name: "three", set: 3 },
  ];

  const [lock, setLock] = useState(false);
  const [data, setData] = useState([]);

  let options;

  if (!lock) {
    options = array.map((e, index) => {
      return (
        <option
          className="m-2 rounded-full"
          value={JSON.stringify(e)}
          key={index}
        >
          {e.name}
        </option>
      );
    });
  }

  const remove = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  const list = data.map((e, index) => (
    <div role="alert" className="alert alert-success ml-3 mb-3 p-2 flex">
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
        {e}
      </span>
    </div>
  ));

  let select;
  useEffect(() => {
    select = document.querySelector(`.select`);
  });

  function onChange(e) {
    if (e.target.value !== "" && !data.includes(e.target.value)) {
      data.push(e.target.value);
      setData([...data]);
    }
  }

  return (
    <div className="flex flex-row items-center">
      <div>
        <select
          disabled={lock}
          onChange={onChange}
          className={`input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 $
          lock ? "text-error focus:text-error" : ""
        }`}
        >
          <option value="">{!lock ? "Pick Something" : "Locked"}</option>
          {options}
        </select>
        <ul>{list}</ul>

        <button
          className="btn ml-3"
          onClick={(e) => {
            // set data to value

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
      </div>
    </div>
  );
}

export default SelectComponent;
