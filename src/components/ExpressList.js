import ToDoList from "./ToDoList";
import "./ExpressList.css";
import content from "../content.png";

function ExpressList({ list, returnId }) {
  if (list.length === 0) {
    return (
      <div className="list-field">
        <img src={content} alt="contentImage"></img>
        <p>Add Your Task</p>
      </div>
    );
  }

  if (list.length > 0) {
    return (
      <div className="list-field">
        <p>Your Tasks</p>
        {list.map((list) => (
          <ToDoList key={list.id} list={list} returnId={returnId} />
        ))}
      </div>
    );
  }
}

export default ExpressList;
