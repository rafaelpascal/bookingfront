import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotels from "./pages/List/Hotels";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<Hotels />} />
        <Route path="/Hotel/:id" element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
