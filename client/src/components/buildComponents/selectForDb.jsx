import React from "react";
function SelectDbData({ arr, name, selected }) {
  const options =
    arr.length >= 1
      ? arr.map((e, index) => {
          return (
            <option
              label={
                e.name
                  ? e.name + " , value - " + e.value
                  : e.partName + " , " + "stTime - " + e.partStTime
              }
              className="m-2 rounded-full"
              value={JSON.stringify(e)}
              key={index}
            >
              {JSON.stringify(e)}
            </option>
          );
        })
      : "";

  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend mb-3">Find {name}</legend>
        <select
          defaultValue=""
          className="select w-4/6"
          onChange={(e) => {
            selected(e.target.value);
          }}
        >
          <option> {name == "" ? "Click a button" : "Pick a " + name}</option>
          {options}
        </select>
        <span className="fieldset-label"></span>
      </fieldset>
    </>
  );
}

export default SelectDbData;
