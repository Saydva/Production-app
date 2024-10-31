import React from 'react';

function ObjArray  (props){
    const name = props.name;
    const method = props.method
    return(
      <span key={name}>
      <label htmlFor={name}>{name}</label>
      <input id={name} type="text" />
      <button onClick={method} id={name} >Set {name}</button>
    </span>)}

export default ObjArray;