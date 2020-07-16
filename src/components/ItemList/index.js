import React from "react";
import Item from "../Item"




const ItemList = ({toDoTasks}) => (<ul>
    {toDoTasks.map(task => (<li key={task.value}><Item itemToDo={task.value} isDone={task.isDone} /></li>))}
</ul>)


export default ItemList