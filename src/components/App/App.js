import React from "react";
import InputItem from "../InputItem";
import ItemList from "../ItemList";
import Footer from "../Footer"

import styles from "./App.module.css";

const toDoTasks = [
    {value: "Написать приложение",
     isDone: true
    },
    {value: "Протестировать",
     isDone: false
    },
    {value: "Задеплоить приложение",
     isDone: false
    }
];


const App = () => (<div className={styles.container}>
  <div className={styles.wrapper}>
    <h1 className={styles.title}>Дела на сегодня:</h1>
    <InputItem />
    <ItemList toDoTasks={toDoTasks}/>
    <Footer count={toDoTasks.length} />
  </div>

</div>)


export {App}