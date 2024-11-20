import React, { useState, useEffect } from "react";

function ReactSelectText(props) {
  const name = props.name;
  const valueOf = props.valueOf; // functions like Number or String()
  const callback = props.callback; // callback Number string value or Object
  const valueSet = props.valueSet; // to make input readonly
  const sendDataToParent = props.sendDataToParent;
  const sendSettingFromChild = props.sendSettingFromChild;

  let objbuild;

  if (props.objbuild) {
    objbuild = props.objbuild;
  }

  useEffect(() => {
    if (valueSet) {
      document.querySelector(`input#${name}`).value = valueSet;
      document.querySelector(`input#${name}`).readOnly = true;
      // document.querySelector(`span#${name}`).style.display = "none";
    }
  });

  const [writedText, setwritedText] = useState("");
  const [text, setText] = useState("");

  //handlers

  const handleChange = (e) => {
    if (!valueSet) {
      setwritedText(callback(e.target.value));
    }
  };

  const handleClick = () => {
    if (typeof writedText == typeof valueOf) {
      setText(writedText);
    }
  };

  const handleSave = () => {
    if (text) {
      sendData(text); //send data
      sendSetting(name);
      objbuild(text);
    }
  };

  //function to send data to parent
  const sendSetting = (value) => {
    if (sendSettingFromChild) {
      sendSettingFromChild(value);
    }
  };

  const sendData = (value) => {
    if (sendDataToParent) {
      sendDataToParent(value);
    }
  };

  const sendObj = (value) => {
    if (objbuild) {
      objbuild(text);
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
              {name}..
            </label>
            {/* </div> */}
            <input
              type="text"
              id={name}
              className="input"
              placeholder="Write ..."
              onChange={handleChange}
              // style:focus={{
              //   transition: "0.5s",
              //   outlineColor: "rgb(61, 145, 255",
              // }}
              style={{
                border: "1px solid rgb(204, 204, 204)",
                borderRadius: "4px",
                background: "white",
                width: "15em",
                fontSize: "11px",
                height: "30px",
                minHeight: "30px",
                paddingLeft: "10px",
                color: "rgb(55, 54, 54)",
              }}
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
          {/* <span id={name}></span> */}
        </span>
      </div>
    </div>
  );
}

export default ReactSelectText;
