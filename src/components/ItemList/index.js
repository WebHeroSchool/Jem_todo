import React from "react";
import Item from "../Item"




const ItemList = ({toDoTasks, onClickIsDone, onDelete}) => {
  return (
    <ul>
      {toDoTasks.map(task => (<li key={task.value}><Item itemToDo={task.value} id={task.id} onDelete={onDelete} isDone={task.isDone} onClickIsDone={onClickIsDone} /></li>))}
    </ul>
  )
}

export default ItemList