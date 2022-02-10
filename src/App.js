import "./App.css";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import InputWork from "./components/InputWork";
import { useState } from "react";
import ExpressList from "./components/ExpressList";
import { faL } from "@fortawesome/free-solid-svg-icons";
const workList = [];
let textAtInput = "";
let chg;
function App() {
  const [totalList, appendToList] = useState(workList);
  let id;
  let edit = false;

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
    let showData = totalList.filter((ele) => {
      if (ele.id === data) {
        textAtInput = ele.text;
        chg(textAtInput);
      } else {
        edit = true;
        return true;
      }
    });
    appendToList((prev) => {
      return showData;
    });
  }

  if (edit) {
    edit = false;
    return (
      <div>
        <Header name="TO-DO" />
        <InputWork set={addList} chg={getFunction} />
        <ExpressList
          list={totalList}
          returnId={{ delId: getIdToDel, editId: getIdToEdit }}
        />
      </div>
    );
  }

  return (
    <div>
      <Header name="TO-DO" />
      <InputWork set={addList} chg={getFunction} />
      <ExpressList
        list={totalList}
        returnId={{ delId: getIdToDel, editId: getIdToEdit }}
      />
    </div>
  );
}

export default App;
