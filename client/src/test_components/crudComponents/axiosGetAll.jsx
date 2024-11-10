import { useState, useEffect } from "react";
import axios from "axios";

function AxiosGetAllData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <li key={index}>
          {item.name}- {item.dataNumber}-{item._id}
        </li>
      ))}
      <p></p>
    </div>
  );
}

export default AxiosGetAllData;
