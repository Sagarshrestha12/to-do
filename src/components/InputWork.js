import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./plus.svg";

let todoCounter = 0;
function InputWork(props) {
  const [display, setDisplay] = useState("");

  const handleAddBtn = (event) => {
    event.preventDefault();
    setDisplay("");
    props.set({ text: display, id: todoCounter });
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
      <form onSubmit={handleAddBtn}>
        <label htmlFor="work"></label>
        <input
          type="text"
          id="work"
          name="do"
          value={display}
          onChange={handleInputField}
          placeholder="Enter"
          required
        ></input>
        <button type="submit" value="">
          <img src={logo} alt="Logo" style={{ height: "1rem" }} />
        </button>
      </form>
    </div>
  );
}

export default InputWork;
