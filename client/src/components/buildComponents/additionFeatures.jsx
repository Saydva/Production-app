import React, { useState } from "react";
import { DataContext } from "./utils/dataContext";
import RowComponent from "./rowComponent";

function AdditionalFeatures() {
  const prop = "other";
  const [attribute, setAttribute] = useState({
    name: "",
    value: "",
  });
  const [description, setDescription] = useState({
    name: "",
    value: "",
  });

  console.log(attribute, description);
  return (
    <div>
      <DataContext.Provider
        value={{ prop, attribute, setAttribute, description, setDescription }}
      >
        <div>
          <h3 className="m-3 p-2 border-neutral border-2 w-min min-w-72 rounded-lg ">
            Attribute{" "}
          </h3>

          <RowComponent name={"Name"} property={String} setting={"attName"} />
          <RowComponent name={"value"} property={String} setting={"attValue"} />
          <button
            className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (attribute.name != "" && attribute.value != "") {
                console.log(attribute);
              } else {
                openModal();
              }
            }}
          >
            Send data
          </button>
          <h3 className="m-3 p-2 border-neutral border-2 w-min min-w-72 rounded-lg ">
            Description
          </h3>
          <RowComponent name={"Name"} property={String} setting={"desName"} />
          <RowComponent name={"value"} property={String} setting={"desValue"} />
          <button
            className="btn w-min min-w-36 rounded-md bg- bg-slate-400 bg-opacity-30 ml-3 text-current"
            onClick={() => {
              if (description.name != "" && description.value !== "") {
                console.log(description);
              } else {
                openModal();
              }
            }}
          >
            Send data
          </button>
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default AdditionalFeatures;
