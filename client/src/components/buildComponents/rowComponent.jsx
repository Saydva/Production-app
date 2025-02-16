import React, { useContext, useState } from "react";
import { Save, XSquare } from "react-feather";
import { DataContext } from "./utils/dataContext.js";

function RowComponent(props) {
  const name = props.name;
  const property = props.property;

  if (props.readOnly) {
    var readOnly = props.readOnly;
  }

  if (props.name === "partStTime") {
  }

  const { piece, setPiece } = useContext(DataContext);
  const { obj, setObj } = useContext(DataContext);

  //state to set up array of objects

  const [lock, setLock] = useState(false);

  //constants to build key value pairs for parent
  const [value, setValue] = useState("");

  const setvalue = (e) => {
    setValue(property(e.target.value));
  };

  const openModal = () => {
    let modal = document.getElementById(`${name}`);
    modal.showModal();
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
        readOnly={readOnly ? readOnly : lock}
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
              setPiece({ ...piece, [name]: value });
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
            openModal();
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
        id={name}
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
              <button className="h-8 w-10 bg-error text-neutral rounded-lg">
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
