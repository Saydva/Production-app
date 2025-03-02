import React, { useState } from "react";

function SearchButton({ forDb, set }) {
  return (
    <div>
      <button
        className="btn-xs btn"
        value={forDb}
        onClick={(e) => {
          set(e.target.value);
        }}
      >
        {forDb}
      </button>
    </div>
  );
}

export default SearchButton;
