import React from 'react';
import ListResult from './elemntaryRoutes/listresult';


function ObjArrayResult (props){
    const obj = props.obj
    const arr = props.arr   
    
    return(
      <>
      <ListResult
      obj = {obj}
      arr = {arr}      
      />
      </>)
}

export default ObjArrayResult;