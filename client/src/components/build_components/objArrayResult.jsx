import React from 'react';

function ObjArrayResult (props){
    const obj = props.obj
    return(
      <>
      <p>{JSON.stringify(obj.piecec)}</p>
      <p>{JSON.stringify(obj.category)}</p>
      <p>{JSON.stringify(obj.materials)}</p>
      </>)
}

export default ObjArrayResult;