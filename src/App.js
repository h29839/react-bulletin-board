import './App.css';
import Header from './Header';
import Threads from './Threads';
import CreateThread from './CreateThread';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-body">
        <Threads />
        <CreateThread />
      </main>
    </div>
  );
}

export default App;
