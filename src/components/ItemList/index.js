import React from "react";
import Item from "../Item"



const ItemList = () => (<ul>
    <li><Item itemToDo={"Написать приложение"} /></li>
    <li><Item itemToDo={"Протестировать"}/></li>
    <li><Item itemToDo={"Задеплоить приложение"}/></li>
</ul>)

export default ItemList