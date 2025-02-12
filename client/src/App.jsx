import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import NavBar from "./NavBar/navBar";
import BuildPage from "./components/mainPaiges/build";
import Home from "./components/mainPaiges/home";
import Test from "./components/mainPaiges/test";

function App() {
  const [dataFromNavBar, setDataFromNavBar] = useState("");

  useEffect(() => {
    handleDataFromNavBar(dataFromNavBar);
  }, [dataFromNavBar]);

  function handleDataFromNavBar(data) {
    setDataFromNavBar(data);
  }

  const themes = ["lofi", "nord", "dim"];
  return (
    <>
      <div data-theme={themes[dataFromNavBar]} className="h-screen">
        <nav>
          <NavBar themes={themes} handleDataFromNavBar={handleDataFromNavBar} />
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="buildPage" element={<BuildPage />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="test" element={<Test />} /> */}
          {/* <Route path="account" element={<Account />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
