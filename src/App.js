// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div>
      <Header name="TO-DO" />
      <ToDoList task="Add some lemon" />
      <ToDoList task="Add some sugar" />
    </div>
  );
}

export default App;
