import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import InputWork from "./components/InputWork";

function App() {
  return (
    <div>
      <Header name="TO-DO" />
      <InputWork />
      <ToDoList task="Add some lemon" />
      <ToDoList task="Add some sugar" />
    </div>
  );
}

export default App;
