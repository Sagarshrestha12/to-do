import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import InputWork from "./components/InputWork";
import { useState } from "react";

const workList = [
  "Rendering list of Data",
  "Add the Plus button",
  "kay yo maya ho ho",
];

function App() {
  const [totalList, appendToList] = useState(workList);

  function addList(data) {
    appendToList((prev) => {
      return [data, ...prev];
    });
  }

  return (
    <div>
      <Header name="TO-DO" />
      <InputWork set={addList} />
      {totalList.map((list) => (
        <ToDoList task={list} />
      ))}
    </div>
  );
}

export default App;
