//import { useState } from "react";
import axios from "axios";

function AxiosPostOne() {
  const data = { name: "Last last data", dataNumber: 3 };

  const handleClick = () => {
    axios
      .post("http://localhost:3000/data", data)
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(`Error : ${JSON.stringify(error)}`);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Post data</button>
      <p>heloo</p>
    </div>
  );
}

export default AxiosPostOne;
