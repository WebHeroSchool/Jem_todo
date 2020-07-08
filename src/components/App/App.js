import React from "react";
import InputItem from "../InputItem";
import {ItemList} from "../ItemList";
import Footer from "../Footer"

import "./App.css";

const toDoTasks = [
    {value: "Написать приложение"},
    {value: "Протестировать"},
    {value: "Задеплоить приложение"}
];


const App = () => (<div className="container">
    <h1>to do</h1>
    <InputItem />
    <ItemList toDoTasks={toDoTasks}/>
    <Footer count={toDoTasks.length} />
</div>)


export {App}