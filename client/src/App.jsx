import { Routes, Route } from "react-router";
import React, { useState } from "react";

import NavBar from "./NavBar/navBar";
import BuildPage from "./components/mainPages/build";
import Home from "./components/mainPages/home";
import Test from "./components/mainPages/test";

function App() {
  const theme = ["lofi", "nord", "dim"];
  const [index, setIndex] = useState(0);

  function changeIndex() {
    setIndex((prev) => prev + 1);
    if (index >= 2) {
      setIndex(0);
    }
  }

  return (
    <div data-theme={theme[index]} className="min-h-svh">
      <nav>
        <NavBar themes={theme} changeIndex={changeIndex} />
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="buildPage" element={<BuildPage />} />
        <Route path="test" element={<Test />} />
        {/* <Route path="test" element={<Test />} /> */}
        {/* <Route path="account" element={<Account />} /> */}
      </Routes>
    </div>
  );
}

export default App;
