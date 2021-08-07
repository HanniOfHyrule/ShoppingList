import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Shopping List</p>
        <Search
          onSearched={(searchedText) => {
            console.log(searchedText);
          }}
        />
      </header>
    </div>
  );
}

export default App;
