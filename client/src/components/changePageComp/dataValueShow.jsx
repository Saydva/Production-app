import React, { useContext, useEffect, useState } from "react";
import RowValueComponent from "./valueShowComponents/rowValueComponent";
import { DataContext } from "../buildComponents/utils/dataContext";
import ValueSelect from "./valueShowComponents/valueSelectComponent";

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

  console.log(dbObject);

  const [pieces, setPieces] = useState([]);
  const [subPieces, setSubPieces] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  useEffect(() => {
    setDbObject(item);
    getData("pieces", setPieces);
    getData("subPieces", setSubPieces);
    getData("attributes", setAttributes);
    getData("descriptions", setDescriptions);
  }, [item]);

  return (
    <>
      <DataContext.Provider value={{ dbObject, setDbObject }}>
        <RowValueComponent name={dbObject.partName} />
        <RowValueComponent name={dbObject.partStTime} readOnly={true} />

        <ValueSelect arr={pieces} name={"pieces"} old={dbObject.piecec} />
        <ValueSelect
          arr={subPieces}
          name={"subPieces"}
          old={dbObject.subPiecec}
        />
        <ValueSelect
          arr={attributes}
          name={"attributes"}
          old={dbObject.attribute}
          hidden={true}
        />
        <ValueSelect
          arr={descriptions}
          name={"descriptions"}
          old={dbObject.description}
          hidden={true}
        />
      </DataContext.Provider>
    </>
  );
}

export default DataValueShow;
