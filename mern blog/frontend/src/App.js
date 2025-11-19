import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="m-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
