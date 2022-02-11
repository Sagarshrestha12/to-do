import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import InputWork from "./components/InputWork";
import { useState } from "react";
import ExpressList from "./components/ExpressList";

const workList = [];
let textAtInput = "";
let chg;
let editId;

function App() {
  const [totalList, appendToList] = useState(workList);
  const [edit, chgEdit] = useState(false);

  function addList(data) {
    appendToList((prev) => {
      return [data, ...prev];
    });
  }

  function getIdToDel(data) {
    appendToList((prev) => {
      return prev.filter((ele) => ele.id !== data);
    });
  }

  function getFunction(func) {
    chg = func;
  }

  function getIdToEdit(data) {
    chgEdit(true);
    totalList.forEach((ele) => {
      if (ele.id === data) {
        textAtInput = ele.text;
        chg(textAtInput);
        editId = ele.id;
      }
    });
  }

  function handleClearBtn() {
    appendToList([]);
  }

  function editText(data) {
    // totalList.text = data;
    if (edit) {
      appendToList((prev) => {
        prev.forEach((ele) => {
          if (ele.id === editId) {
            ele.text = data;
          }
        });
        return prev;
      });
    }
    chgEdit(false);
  }

  return (
    <div className="todo">
      <Header name="TO-DO" />
      <InputWork
        set={addList}
        chg={getFunction}
        edit={edit}
        editText={editText}
      />
      <ExpressList
        list={totalList}
        returnId={{ delId: getIdToDel, editId: getIdToEdit }}
      />
      <div className="clear-button">
        <button onClick={handleClearBtn}>Clear</button>
      </div>
    </div>
  );
}

export default App;
