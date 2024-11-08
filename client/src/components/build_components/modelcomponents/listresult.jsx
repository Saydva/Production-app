import React from "react";

function ListResult(props) {
  const arr = props.arr;
  const obj = props.obj;

  return (
    <>
      {arr.map((e) => (
        <p key={e}>{JSON.stringify(obj[e])}</p>
      ))}
    </>
  );
}

export default ListResult;
