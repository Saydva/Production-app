import React, { useContext, useEffect, useState } from "react";
import RowComponent from "./valueShowComponents/rowComponent";
import { DataContext } from "../../buildComponents/utils/dataContext";
import ValueSelect from "./valueSelectComponent";

function DataValueShow() {
  const { item, getData } = useContext(DataContext);
  const [dbObject, setDbObject] = useState({
    partName: "",
    partStTime: 0,
    piecec: [],
    subPiecec: [],
    attribute: [],
    description: [],
    operation: [],
  });

  const [pieces, setPieces] = useState([]);
  const [subPieces, setSubPieces] = useState([]);
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    setDbObject(item);
    getData("pieces", setPieces);
    getData("subPieces", setSubPieces);
    getData("attributes", setAttributes);
  }, [item]);

  return (
    <>
      <RowComponent name={dbObject.partName} watch={dbObject} />
      <RowComponent
        name={dbObject.partStTime}
        watch={dbObject}
        readOnly={true}
      />
      <ValueSelect arr={pieces} name={"pieces"} old={dbObject.piecec} />
      <ValueSelect arr={subPieces} name={"subPieces"} />
      <ValueSelect arr={attributes} name={"attributes"} />
    </>
  );
}

export default DataValueShow;
