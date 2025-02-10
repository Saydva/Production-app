import React, { useState } from "react";
import SelectComponent from "../buildComponents/selectRowComponent";

function Test() {
  function getUID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
  }

  const handleDelete = (index) => {
    const newArray = items.filter((item, i) => i !== index);
    setItems(newArray);
  };

  const selectComponent = (
    <div
      key={getUID()}
      id={getUID()}
      className="border-black border-2 rounded-md"
    >
      <SelectComponent arr={["1", "2"]} />
      <button onClick={(e) => handleDelete(e.target.id)}>Delete</button>
    </div>
  );

  const [items, setItems] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          items.push(selectComponent);
          console.log(items);
          setItems([...items]);
        }}
      >
        +
      </button>
      {items}
    </div>
  );
}

export default Test;
