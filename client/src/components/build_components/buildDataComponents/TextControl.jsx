import "./textControl.css";
import React, { useState } from "react";

function ReactSelectText(props) {
  const name = props.name;

  const [writedText, setwritedText] = useState("no value");
  const [text, setText] = useState("");

  //handlers

  const handleChange = (e) => {
    setwritedText(e.target.value);
  };

  const handleClick = () => {
    setText(writedText);
  };

  const handleSave = () => {
    if (text) {
      document.querySelector(`span#${name}`).innerText =
        "You saved this:  " + JSON.stringify(text);
    }
  };

  return (
    <div>
      <div className="flex">
        <div className="select-container">
          <div className="select-wrapper">
            {/* <div style={{ width: "8rem" }}> */}
            <label
              htmlFor={name}
              style={{ display: "inline-block", width: "6rem" }}
            >
              {name}..{" "}
            </label>
            {/* </div> */}
            <input
              type="text"
              id={name}
              className="input"
              placeholder="Write ..."
              onChange={handleChange}
            />
          </div>
        </div>
        <span
          style={{
            height: "1.5rem",
            padding: "8px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            onClick={handleClick}
            className="arow"
            src="/svg/reshot-icon-arrow-right-ZP2WDL9B8N.svg"
            alt=""
            style={{ height: "1.5rem", padding: "8px" }}
          />
          <div style={{ color: "grey" }}>{JSON.stringify(text)}</div>
          <button
            onClick={handleSave}
            style={{
              margin: "0 8px",
              padding: "0.3rem",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: "6px",
              backgroundColor: "transparent",
              color: " rgb(128, 128, 128)",
            }}
          >
            Save this
          </button>
          <span id={name}></span>
        </span>
      </div>
    </div>
  );
}

export default ReactSelectText;
