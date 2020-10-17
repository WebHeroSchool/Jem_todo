import React from "react";
import InputItem from "../InputItem";
import ItemList from "../ItemList";
import Footer from "../Footer"

import styles from "./App.module.css";


class App extends React.Component {
  state = {
    toDoTasks: [
      {value: "Написать приложение",
        isDone: true,
        id: 1
      },
      {value: "Протестировать",
        isDone: false,
        id: 2
      },
      {value: "Задеплоить приложение",
        isDone: false,
        id: 3
      }
    ],
  }

  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this)
  }

  onClickDone = id =>  {
    const newItemList = this.state.toDoTasks.map(item => {
      const newItem = {...item}
      if (newItem.id === id) {
        newItem.isDone = !item.isDone
      }
      return newItem
    })
    this.setState({toDoTasks: newItemList})
}

  onDelete = (delTaskId) => {
    const newItemList = this.state.toDoTasks.filter(task => task.id !== delTaskId)
    this.setState({toDoTasks: newItemList})
  }


  render() {
    return(
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Дела на сегодня:</h1>
          <InputItem />
          <ItemList toDoTasks={this.state.toDoTasks} onClickIsDone={this.onClickDone} onDelete={this.onDelete}/>
          <Footer count={this.state.toDoTasks.length} />
        </div>

      </div>
    )
  }
}


export {App}