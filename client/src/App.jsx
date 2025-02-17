import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import NavBar from "./NavBar/navBar";
import BuildPage from "./components/mainPages/build";
import Home from "./components/mainPages/home";
import Test from "./components/mainPages/test";

function App() {
  const [dataFromNavBar, setDataFromNavBar] = useState("");
  const [themes, setThemes] = useState(["lofi", "nord", "dim"]);

  useEffect(() => {
    handleDataFromNavBar(dataFromNavBar);
  }, [dataFromNavBar]);

  function handleDataFromNavBar(data) {
    setDataFromNavBar(data);
  }

  return (
    <div data-theme={themes[dataFromNavBar]} className="min-h-svh">
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
  );
}

export default App;
