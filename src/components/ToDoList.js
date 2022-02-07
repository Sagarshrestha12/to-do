import "./ToDoList.css";

function ToDoList(props) {
  return (
    <div className="todo_list">
      <p>{props.task} </p>
    </div>
  );
}

export default ToDoList;
