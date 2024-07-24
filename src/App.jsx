import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cont from "./pages/Cont";
import Abt from "./pages/Abt";
import Pro from "./pages/Pro";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cont" element={<Cont />} />
          <Route path="abt" element={<Abt />} />
          <Route path="pro" element={<Pro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
