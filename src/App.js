import { Router,Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Posts from "./Posts";

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path=":threadId" element={<Posts />}/>
    </Router>

  );
}

export default App;
