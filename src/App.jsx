import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cont from "./pages/Cont";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cont" element={<Cont />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
