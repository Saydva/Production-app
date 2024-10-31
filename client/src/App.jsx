// import InputData from "./components/inputData"
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";

import BuilData from "./components/build_components/elemntaryRoutes/elementaryComponents/BuildData";
import Home from "./components/build_components/elemntaryRoutes/elementaryComponents/Home"
import Piece from "./components/build_components/elemntaryRoutes/Piece";
import SubPiece from "./components/build_components/elemntaryRoutes/Subpiece";
import Model from "./components/build_components/elemntaryRoutes/Model";

function App() {
  return(
<div>
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/buildData">Build data</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="buildData" element={<BuilData/>}>
        <Route path="piece" element={<Piece/>} />
        <Route path="subpiece" element={<SubPiece/>} />
        <Route path="model" element={<Model/>}/>
      </Route>
    </Routes>
  </Router>
</div>
  )
}

export default App
