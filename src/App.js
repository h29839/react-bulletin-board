import { BrouserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":threadId" element={<Posts />}/>
      </Routes>
    </Router>

  );
}

export default App;
