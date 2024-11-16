import React, { useState } from "react";

function ObjKey(props) {
  const name = props.name;
  const method = props.method;
  const search = props.search;

  return (
    <span key={name}>
      <label htmlFor={name}>{name}</label>
      <input id={name} type="text" onChange={search} />
      <button id={name} onClick={method}>
        Set {name}
      </button>
    </span>
  );
}

export default ObjKey;
