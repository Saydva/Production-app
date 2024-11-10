import React from "react";
import models from "../../../test_components/testingObjects/testProdObj";
import { useState } from "react";

function TestingPage() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredDatas, setFilteredDatas] = useState([]);

  const handleSearch = (e) => {
    e.prevntdefault;
    setSearchValue(e.target.value);
    if (searchValue.length < 1) {
      setFilteredDatas([]);
    } else if (searchValue.length > 1) {
      const filteredData = models.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredDatas(filteredData);
    }
  };

  console.log(searchValue);

  return (
    <div className="testcontainer">
      <br />
      <h4>Testin Page</h4>
      <br />
      <p>building search input for piecec and subpiecec</p>
      <br />
      <div className="wrapcontainer">
        <div className="wrap">
          <input type="text" onChange={handleSearch} value={searchValue} />

          {filteredDatas.map((e) => {
            return (
              <div key={e.modelName}>
                <div>{e.modelName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
