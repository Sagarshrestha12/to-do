import { useState } from "react";

function InputWork(props) {
  const [display, setDisplay] = useState("");

  const handleAddBtn = (event) => {
    event.preventDefault();
    setDisplay("");
    props.set(display);

  };

  const handleInputField = (event) => {
    setDisplay(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleAddBtn}>
        <label htmlFor="work">Enter list</label>
        <input
          type="text"
          id="work"
          name="do"
          value={display}
          onChange={handleInputField}
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
