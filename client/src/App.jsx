import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import BuildPage from "./components/mainPaiges/build";
import NavBar from "./NavBar/navBar";
import Home from "./components/mainPaiges/home";

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
      <div data-theme={themes[dataFromNavBar]}>
        <nav>
          <NavBar themes={themes} handleDataFromNavBar={handleDataFromNavBar} />
        </nav>
        <Routes>
          <Route index element={<Home />} />
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
