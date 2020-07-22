import React from "react";
import Item from "../Item"




const ItemList = ({toDoTasks, onClickIsDone}) => {
  return (
    <ul>
      {toDoTasks.map(task => (<li key={task.value}><Item itemToDo={task.value} isDone={task.isDone} onClickIsDone={onClickIsDone} /></li>))}
    </ul>
  )
}

export default ItemList