import "./ToDoList.css";
import edit from "../edit.svg";

import del from "../del.svg";
function ToDoList({ list, returnId }) {
  function editButtonHandler() {
    returnId.editId(list.id);
  }

  function deleteButtonHandler() {
    returnId.delId(list.id);
  }
  return (
    <div className="todo_list clearfix">
      <span>{list.text} </span>
      <button
        className="icon"
        type="button"
        value=""
        onClick={deleteButtonHandler}
      >
        <img src={del} alt="edit" style={{ height: "1rem" }} />
      </button>
      <button
        className="icon"
        type="button"
        value=""
        onClick={editButtonHandler}
      >
        <img src={edit} alt="edit" style={{ height: "1rem" }} />
      </button>
    </div>
  );
}

export default ToDoList;
