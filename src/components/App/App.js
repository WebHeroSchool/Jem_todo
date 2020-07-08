import React from "react";
import InputItem from "../InputItem";
import {ItemList} from "../ItemList";
import Footer from "../Footer"

import styles from "./App.module.css";

const toDoTasks = [
    {value: "Написать приложение"},
    {value: "Протестировать"},
    {value: "Задеплоить приложение"}
];


const App = () => (<div className={styles.container}>
    <h1 className={styles.title}>to do</h1>
    <InputItem />
    <ItemList toDoTasks={toDoTasks}/>
    <Footer count={toDoTasks.length} />
</div>)


export {App}