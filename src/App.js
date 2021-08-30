import "./App.css";
import "./components/List.css";
import "./components/AddItem.css";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Shopping List</p>
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
