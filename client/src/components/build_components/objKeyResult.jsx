import React from 'react';

function  ObjKeyResult (props) {
    const obj = props.obj
    return(
      <>
      <p>{obj.partName}</p>
      <p>{obj.stTime}</p>
      </>
    )
  }

export default ObjKeyResult;