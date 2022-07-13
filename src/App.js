import './App.css';
import Landing from './views/Landing';
import Counter from './views/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing userName="Alejandro" userGender="M"/>
      </header>
      <main className="App-main">
        <Counter/>
      </main>
    </div>
  );
}

export default App;
