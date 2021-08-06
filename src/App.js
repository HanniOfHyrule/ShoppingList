import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Shopping List</p>
        <form action="/" method="get">
          <label htmlFor="header-search">
            <span className="visually-hidden">Search Food</span>
          </label>
          <input
            type="text"
            id="header-search"
            placeholder="Search Food"
            name="s"
          ></input>
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;
