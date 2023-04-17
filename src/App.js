import './App.css';
import Header from './Header';
import Threads from './Threads';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-body">
        <Threads />
      </main>
    </div>
  );
}

export default App;
