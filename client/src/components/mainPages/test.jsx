import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchButton from "../buildComponents/searchButton";
import SelectDbData from "../buildComponents/selectForDb";
import DataValueShow from "../buildPageComp/changeComponents/dataValueShow";
import { DataContext } from "../buildComponents/utils/dataContext";

function Test() {
  // data from db
  const [data, setData] = useState([]);
  // string for axios to search all documnets in db collection
  const [query, setQuery] = useState("");
  // show selecte item
  const [item, setItem] = useState("");

  const nameComponent = query.slice(0, -1);

  // const to handle axios url
  const postUrl = (prop) => {
    return "http://localhost:3000/" + prop;
  };

  // handle axios get data
  const getData = async (name, setdata) => {
    await axios
      .get(postUrl(name))
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get data from Db
  useEffect(() => {
    query != "" ? getData(query, setData) : setData("");
  }, [query]);

  return (
    <div className="m-6 flex flex-col gap-2">
      <h3>Hello form test</h3>
      <div className="flex flex-row gap-1">
        <SearchButton
          forDb={"pieces"}
          set={setQuery}
          dbData={data}
          setDbData={setData}
        />
        <SearchButton forDb={"subPieces"} set={setQuery} />
        <SearchButton forDb={"models"} set={setQuery} />
        <SearchButton forDb={"attributes"} set={setQuery} />
        <SearchButton forDb={"descriptions"} set={setQuery} />
      </div>
      <div>
        <SelectDbData arr={data} name={query} selected={setItem} />
      </div>
      <div>
        <DataContext.Provider item={{ item }}>
          <DataValueShow />
        </DataContext.Provider>
      </div>

      <button className="btn w-44">Change</button>
      <button className="btn w-44">Delete</button>
    </div>
  );
}

export default Test;
