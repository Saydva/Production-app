import { React, useEffect, useState } from "react";

function SelectComponent() {
  const array = [
    { name: "one", set: 1 },
    { name: "two", set: 2 },
    { name: "three", set: 3 },
  ];

  const options = array.map((e, index) => {
    return (
      <option value={JSON.stringify(e)} key={index}>
        {e.name}
      </option>
    );
  });

  const [lock, setLock] = useState(false);
  const [data, setData] = useState([]);

  const remove = (i) => {
    data.splice(i, 1);
    setData([...data]);
  };

  console.log(data);

  const list = data.map((e, index) => (
    <li id={index} key={index}>
      {e}
      <button
        id={index}
        onClick={(e) => {
          remove(e.target.id);
        }}
      >
        x
      </button>
    </li>
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
      <div
        className={`w-full shadow-md shadow-slate-500 motion-preset-slide-right m-3 max-w-xs
          ${lock ? "text-error focus:text-error" : ""}`}
      >
        <select onChange={onChange} className="select select-secondary w-full ">
          <option value="">Pick something</option>
          {options}
        </select>
        <ul>
          <p>hi</p>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default SelectComponent;
