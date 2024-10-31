import React from 'react';

function ObjOperationsResult (props){
 const value = props.value
    return(
      <>
      <p>{JSON.stringify(value.input1)}</p>
      <p>{JSON.stringify(value.input2)}</p>
      </>)
    }
 
export default ObjOperationsResult;