import React from "react";
import InputItem from "../InputItem";
import ItemList from "../ItemList";
import Footer from "../Footer"

import styles from "./App.module.css";


class App extends React.Component {
  state = {
    toDoTasks: [
      {value: "Написать приложение",
        isDone: true
      },
      {value: "Протестировать",
        isDone: false
      },
      {value: "Задеплоить приложение",
        isDone: false
      }
    ],
  }

  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this)
  }

  onClickDone(isDone) {
    console.log(isDone)
}


  render() {
    return(
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Дела на сегодня:</h1>
          <InputItem />
          <ItemList toDoTasks={this.state.toDoTasks} onClickIsDone={this.onClickDone} />
          <Footer count={this.state.toDoTasks.length} />
        </div>

      </div>
    )
  }
}


export {App}