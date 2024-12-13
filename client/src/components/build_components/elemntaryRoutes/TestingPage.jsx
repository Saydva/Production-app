import React, { useState } from "react";
import axios from "axios";

function Test() {
  const [piece, setPiece] = useState([]);
  const [err, setErr] = useState("");

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    let text = e.target.value;
    setQuery(text);
  };

  console.log(query);

  const handleOnClick = () => {
    axios
      .get(`http://localhost:3000/${query}`)
      .then((response) => {
        setPiece(response.data);
        console.log(piece);
      })
      .catch((error) => {
        setErr(JSON.stringify(error.message));
        console.log(error);
      });
  };

  return (
    <div>
      <h4>model and category</h4>

      <input type="text" onChange={handleChange} />
      <button onClick={handleOnClick}>get models</button>
      {piece.map((item, index) => (
        <p key={index}>{JSON.stringify(item)}</p>
      ))}
      <p>{err}</p>
    </div>
  );
}

export default Test;
