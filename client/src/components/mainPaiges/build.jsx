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
      <div className="flex flex-col justify-start gap-3 ">
        <h4 className="pl-2">Build Your Data</h4>
      </div>
      <RowComponent name={"name"} changeObj={changeObj} />
    </>
  );
}

export default BuildPage;
