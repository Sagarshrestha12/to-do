import "./App.css";
import Header from "./components/Header";
import InputWork from "./components/InputWork";
import { useState } from "react";
import ExpressList from "./components/ExpressList";
import displayMessage from "./utils";

const workList = [];
let textAtInput = "";
let chg;
let editId;

function App() {
  const [totalList, appendToList] = useState(workList);
  const [edit, chgEdit] = useState(false);
  const [message, changeMessage] = useState("Clear");

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
    changeMessage("Clearing all Task");
    displayMessage(message);
  }

  function editText(data) {
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

  function setMessage(msg) {
    changeMessage(msg);
    displayMessage(msg);
  }

  return (
    <div className="todo">
      <Header />
      <InputWork
        set={addList}
        chg={getFunction}
        edit={edit}
        editText={editText}
        message={message}
        setMessage={setMessage}
      />
      <ExpressList
        list={totalList}
        returnId={{ delId: getIdToDel, editId: getIdToEdit }}
        setMessage={setMessage}
      />
      <div id="popup">{message}</div>
      <div className="clear-button">
        <button onClick={handleClearBtn}>Clear</button>
      </div>
    </div>
  );
}

export default App;
