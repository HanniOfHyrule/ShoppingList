import "./App.css";
import "./components/List.css";
import "./components/AddItem.css";
import ShoppingList from "./components/ShoppingList";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App-header">
      <MainHeader />
      <ShoppingList />
    </div>
  );
}

export default App;
