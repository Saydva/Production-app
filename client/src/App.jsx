import "./App.css";
import BuildPage from "./NavBar/build";
import NavBar from "./NavBar/navBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [dataFromNavBar, setDataFromNavBar] = useState("");

  function handleDataFromNavBar(data) {
    setDataFromNavBar(data);
  }
  const themes = ["light", "dark", "cupcake"];
  return (
    <>
      <div data-theme={dataFromNavBar}>
        <nav>
          <NavBar themes={themes} handleDataFromNavBar={handleDataFromNavBar} />
        </nav>
        <div>{dataFromNavBar}</div>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="buildPage" element={<BuildPage />}>
            {/* <Route path="profile" element={<Profile />} /> */}
            {/* <Route path="account" element={<Account />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
