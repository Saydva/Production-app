import React from "react";
import { Link, Outlet } from "react-router-dom";

function BuilData() {
  return (
    <div>
      <div className="secondNavigation">
        <Link to="/buildData/piece">Piece</Link>
        <Link to="/buildData/subpiece">Subpiece</Link>
        <Link to="/buildData/model">Model</Link>
        <Link to="/buildData/optionCategory">Option and Category</Link>
        <Link to="/buildData/test">Test</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default BuilData;
