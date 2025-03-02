import React, { useState } from "react";
import { DataContext } from "../buildComponents/utils/dataContext";
import RowComponent from "./smallComponents/rowComponent";
import axios from "axios";

function AdditionalFeatures() {
  const prop = "other";

  // handle objects attribute and option
  const [attribute, setAttribute] = useState({
    name: "",
    value: "",
  });
  const [description, setDescription] = useState({
    name: "",
    value: "",
  });

  console.log(attribute);

  const [reset, setReset] = useState("");

  // const to handle axios url
  const postUrl = (prop) => {
    return "http://localhost:3000/" + prop;
  };

  // handle post axios
  const postData = async (object, string) => {
    await axios
      .post(postUrl(string), object)
      .then((response) => {
        console.log(response, object);
      })
      .catch((error) => {
        // console.log(error.response.data.errorResponse.errmsg);
        console.log(error);
      });
  };
  return (
    <div key={reset}>
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
                postData(attribute, "attribute");
                setReset(!reset);
              } else {
                window.modal.showModal();
              }
            }}
          >
            Send data
          </button>
          <button
            className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20"
            onClick={() => {
              setReset(!reset);
            }}
          >
            Reset
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
                postData(description, "description");
              } else {
                window.modal.showModal();
              }
            }}
          >
            Send data
          </button>
          <button
            className="text-sm mx-2 bg-slate-400 bg-opacity-15 p-1 rounded-sm  shadow-md shadow-slate border-2 border-slate-600 border-opacity-20"
            onClick={() => {
              setReset(!reset);
            }}
          >
            Reset
          </button>

          <dialog
            id="modal"
            className="modal modal-bottom sm:modal-middle flex justify-center items-center "
          >
            <div className="modal-box w-56  text-xs rounded-md">
              <p className="py-4">
                Please set up all properties of your Aditional object!!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="h-8 w-10 bg-error text-neutral rounded-lg">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default AdditionalFeatures;
