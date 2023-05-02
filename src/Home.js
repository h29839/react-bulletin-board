import Header from './Header';
import Threads from './Threads';

function Home(){
    return (
        <div className="App">
          <Header />
          <main className="App-body">
            <Threads />
          </main>
        </div>
      );
}

export default Home;