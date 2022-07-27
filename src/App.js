import "./App.css";
import Landing from "./views/Landing";
import Counter from "./views/Counter";
import ToDoList from "./views/ToDoList";
import StarWarsCharacters from "./views/StarWarsCharacters";
import PokemonList from "./views/PokemonList";
import PokemonProfile from "./views/PokemonProfile";
import Register from "./views/Register";

import "./index.scss";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            React
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link"to="/counter">Counter</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link"to="/toDoList">To Do List</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pokemon">Pokemon</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/starwars">Star Wars</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="App-main">
        <Routes>
          <Route
            path="/"
            element={<Landing userName="Alejandro" userGender="M" />}
          ></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/toDoList" element={<ToDoList />}></Route>
          <Route path="/starwars" element={<StarWarsCharacters />}></Route>
          <Route path="/pokemon" element={<PokemonList />}></Route>
          <Route path="/pokemon/:id" element={<PokemonProfile />}></Route>
          <Route path="/pokemon/:id" element={<PokemonProfile />}></Route>
          <Route path="/register" element={<Register />}></Route>

        </Routes>
      </main>
    </div>
  );
}

export default App;
