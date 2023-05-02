import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Header from './Header';
import Threads from './Threads';
import Posts from './Posts';

function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <main className="App-body">
          <Routes>
              <Route path="/" element={<Threads />} />
              <Route path="/thread/:threadId" element={<Posts />} />
          </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
