import { useState } from "react";

function InputWork() {
  let [display, setDisplay] = useState("");
  const [status, setStatus] = useState("Enter value");

  const handleAddBtn = (event) => {
    event.preventDefault();
    setStatus(display);
    // console.log(display);
    setDisplay("");
  };

  const handleToDo = (event) => {
    // display = event.target.value;
    setDisplay(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddBtn}>
        <label htmlFor="work">{status}</label>
        <input
          type="text"
          id="work"
          name="do"
          value={display}
          onChange={handleToDo}
          required
        ></input>
        <button type="submit" value="">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputWork;
