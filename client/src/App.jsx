import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import "./App.css";

import BuilData from "./components/build_components/elemntaryRoutes/BuildData";
import Home from "./components/build_components/elemntaryRoutes/Home";
import Piece from "./components/build_components/modelComponents/Piece";
import SubPiece from "./components/build_components/modelComponents/Subpiece";
import Model from "./components/build_components/modelComponents/Model";
import TestingPage from "./components/build_components/elemntaryRoutes/TestingPage";
import OptionCategoty from "./components/build_components/modelComponents/OptionCategory";

function App() {
  return (
    <div>
      <Router>
        <nav className="navigation">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/buildData">
            <h2>Build data</h2>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buildData" element={<BuilData />}>
            <Route path="piece" element={<Piece />} />
            <Route path="subpiece" element={<SubPiece />} />
            <Route path="model" element={<Model />} />
            <Route path="optionCategory" element={<OptionCategoty />} />
            <Route path="test" element={<TestingPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
