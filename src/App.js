import './App.css';
import Landing from './views/Landing';
import Counter from './views/Counter';
import ToDoList from './views/ToDoList';
import StarWarsCharacters from './views/StarWarsCharacters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing userName="Alejandro" userGender="M"/>
      </header>
      <main className="App-main">
        {/* <Counter/>
        <ToDoList/> */}
        <StarWarsCharacters/>
      </main>
    </div>
  );
}

export default App;
