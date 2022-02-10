import ToDoList from "./ToDoList";

function ExpressList({ list , returnId}) {
  if (list.length === 0) {
    return <p>No Contents </p>;
  }

  if (list.length > 0)
    return list.map((list) => <ToDoList key={list.id} list={list} returnId={returnId} />);
}

export default ExpressList;
