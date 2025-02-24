import React, { useContext, useState } from "react";
import { Save, XSquare } from "react-feather";
import { DataContext } from "./utils/dataContext.js";

function RowComponent(props) {
  const name = props.name;
  const property = props.property;

  // show and hide modal
  const [modal, setModal] = useState(false);

  // if (props.setting) {
  //   var setting = props.setting;
  // }

  const {
    prop,
    piece,
    setPiece,
    subPiece,
    setSubPiece,
    model,
    setModel,
    attribute,
    setAttribute,
    description,
    setDescription,
    obj,
    setObj,
  } = useContext(DataContext);

  // animation classes
  const endAnimation = () => {};

  //state to set up array of objects

  const [lock, setLock] = useState(false);

  //constants to build key value pairs for parent
  const [value, setValue] = useState("");

  const setvalue = (e) => {
    setValue(property(e.target.value));
  };

  return (
    //daisy ui to use better css
    <div
      className={`flex ${
        lock ? "flex-row-reverse" : "flex-row"
      } justify-evenly w-min`}
    >
      <input
        // value={value}
        readOnly={prop.readOnly ? readOnly : lock}
        onChange={setvalue}
        type="text"
        placeholder={
          !props.array ? `${name} of your part` : `${name} of ${props.array}`
        }
        className={`input input-ghost w-full max-w-xs shadow-md shadow-slate-500 border-neutral border-2 motion-preset-slide-right m-3 min-w-56 ${
          lock ? "text-error focus:text-error" : ""
        }`}
      />
      <button
        className="btn my-3"
        onClick={(e) => {
          if (value) {
            // set data to value
            if (!props.array) {
              if (prop == "piece") setPiece({ ...piece, [name]: value });
              if (prop == "subPiece")
                setSubPiece({ ...subPiece, [name]: value });
              if (prop == "model") setModel({ ...model, [name]: value });
              if (prop == "other" && prop.setting == "attName")
                setAttribute({ ...attribute, name: value });
              if (prop == "other" && prop.setting == "attValue")
                setAttribute({ ...attribute, value: value });
              if (prop == "other" && prop.setting == "desName")
                setDescription({ ...description, name: value });
              if (prop == "other" && prop.setting == "desValue")
                setDescription({ ...description, value: value });
            }

            if (props.array) {
              setObj({ ...obj, [name]: value });
            }

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
          } else {
            setModal(true);
          }
        }}
      >
        {lock ? (
          <XSquare pointerEvents={"none"} />
        ) : (
          <Save pointerEvents={"none"} />
        )}
      </button>
      {/* modal for ba data input */}

      <dialog
        open={modal}
        className="modal modal-bottom sm:modal-middle flex justify-center items-center "
      >
        <div className="modal-box w-56  text-xs rounded-md">
          <p className="py-4">
            {!value
              ? `Write the "${name}".  "${name}" must be : ${typeof property()} `
              : ""}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  setModal(false);
                }}
                className="h-8 w-10 bg-error text-neutral rounded-lg"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default RowComponent;
