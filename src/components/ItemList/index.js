import React from "react";
import Item from "../Item"

const toDoTasks = ["Написать приложение", "Протестировать", "Задеплоить приложение"];
const len = toDoTasks.length;

const ItemList = () => (<ul>
    {toDoTasks.map(elem => (<li><Item itemToDo={elem} /></li>))}
</ul>)


export {ItemList, len}