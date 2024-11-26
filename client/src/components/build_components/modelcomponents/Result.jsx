import React, { useEffect } from "react";

function Result(props) {
  const obj = props.obj;
  // const name = props.name;
  // const stTime = props.stTime;
  // const piecec = props.piecec;
  // const subpiecec = props.subpiecec;
  // const category = props.category;
  // const option = props.option;
  // const operations = props.operations;

  // useEffect(() => {
  //   [name, stTime, piecec, subpiecec, category, option, operations];
  // }, [name, stTime, piecec, subpiecec, category, option, operations]);
  useEffect(() => {
    obj;
  }, [obj]);

  return (
    <div>
      <h3>Your data . . .</h3>
      <p>{JSON.stringify(obj)}</p>

      {/* <p>{name}</p>
      <p>{stTime}</p>
      <p>{piecec}</p>
      <p>{JSON.stringify(subpiecec)}</p>
      <p>{JSON.stringify(category)}</p>
      <p>{option}</p>
      <p>{operations}</p> */}
    </div>
  );
}

export default Result;
