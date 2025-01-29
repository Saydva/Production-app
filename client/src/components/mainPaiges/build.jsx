import { useEffect, useState } from "react";
import RowComponent from "../buildComponents/rowComponent";

function BuildPage() {
  const [obj, setObj] = useState({});
  const [dataFromRow, setdataFromRow] = useState("");

  const changeObj = (data) => {
    setdataFromRow(data);
  };

  useEffect(() => {
    console.log(dataFromRow);
  }, [changeObj]);

  return (
    <>
      <RowComponent name={"name"} changeObj={changeObj} />
    </>
  );
}

export default BuildPage;
