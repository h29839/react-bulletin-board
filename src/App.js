import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:threadId" element={<Posts />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
