import { useState } from "react";
import logo from "./plus.svg";
import "./InputWork.css";

let todoCounter = 0;
function InputWork(props) {
  const [display, setDisplay] = useState("");

  const handleAddBtn = (event) => {
    event.preventDefault();
    props.editText(display);
    setDisplay("");
    if (!props.edit) {
      props.set({ text: display, id: todoCounter });
      props.setMessage("Added the task");
    }
    todoCounter++;
    props.chg(editText);
  };

  function editText(data) {
    setDisplay(data);
  }

  const handleInputField = (event) => {
    setDisplay(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddBtn} className="input-field">
        <label htmlFor="work"></label>
        <input
          type="text"
          id="work"
          name="do"
          value={display}
          onChange={handleInputField}
          placeholder="Enter Task"
          className="input-text"
          required
        ></input>
        <button className="input-button" type="submit" value="">
          <img src={logo} alt="Logo" style={{ height: "1rem" }} />
        </button>
      </form>
    </div>
  );
}

export default InputWork;
