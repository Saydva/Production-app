import React, { useState } from "react";
import ArrayComponent from "./arrayComponent";
import { DataContext } from "./utils/dataContext";
import RowComponent from "./rowComponent";

function AdditionalFeatures() {
  const prop = "other";
  const [attribute, setAttribute] = useState({
    name: "",
  });
  const [description, setDescription] = useState({
    name: "",
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

          <RowComponent name={"Name"} property={String} setting={"att"} />

          <h3 className="m-3 p-2 border-neutral border-2 w-min min-w-72 rounded-lg ">
            Description
          </h3>
          <RowComponent name={"Name"} property={String} setting={"des"} />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default AdditionalFeatures;
