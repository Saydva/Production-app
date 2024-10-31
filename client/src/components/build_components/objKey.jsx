import React, { useState } from 'react';

function  ObjKey (props){
    const name = props.name
    const method = props.method

  return (
  <span key={name}>
    <label htmlFor={name}>{name}</label>
    <input id={name} type="text" />
    <button id={name} onClick={method}>Set {name}</button>
  </span>)};

    


export default ObjKey;