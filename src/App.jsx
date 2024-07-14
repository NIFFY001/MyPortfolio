import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cont from "./pages/Cont";
import Abt from "./pages/Abt";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cont" element={<Cont />} />
          <Route path="abt" element={<Abt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
