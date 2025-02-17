import { React, useState } from "react";
import { XCircle } from "react-feather";

function SelectComponent(props) {
  const name = props.name;
  let sendData;

  if (props.setPieceDes) {
    sendData = props.setPieceDes;
  }

  if (props.setPieceAtt) {
    sendData = props.setPieceAtt;
  }

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
        {e}
      </span>
    </div>
  ));

  function onChange(e) {
    if (e.target.value !== "" && !data.includes(e.target.value)) {
      data.push(e.target.value);
      setData([...data]);
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
      </div>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default SelectComponent;
