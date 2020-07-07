import React from "react";
import Item from "../Item"

const toDoTasks= ["Написать приложение", "Протестировать", "Задеплоить приложение"]

const ItemList = () => (<ul>
    <li><Item itemToDo={toDoTasks[0]} /></li>
    <li><Item itemToDo={toDoTasks[1]}/></li>
    <li><Item itemToDo={toDoTasks[2]}/></li>
</ul>)

export {ItemList, toDoTasks}