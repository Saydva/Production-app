import React, { useState } from "react";
import ReactSelectText from "./TextControl";

function ReactSelectOperation(props) {
  const name1 = props.name1;
  const name2 = props.name2;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert("you sendet data");
  };
  return (
    <div>
      <ReactSelectText name={name1} valueOf={String()} callback={String} />
      <ReactSelectText name={name2} valueOf={Number()} callback={Number} />
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          paddingRight: "0.5rem",
        }}
      >
        <button
          style={{
            border: "3px solid grey",
            borderRadius: "4px",
            padding: "0.3rem",
            width: "6rem",
            backgroundColor: isHover ? "#dfdfe4" : "transparent",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <img
            src="/svg/button.svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default ReactSelectOperation;
