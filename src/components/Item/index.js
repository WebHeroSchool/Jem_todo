import React from "react";
import styles from "./Item.module.css";
import classnames from "classnames";
import Checkboxes from "./Checkbox";
import DeleteItem from "./DeleteItem";

const Item = ({itemToDo, isDone, onClickIsDone}) => {
    return(
      <span className={
          classnames({
              [styles.item]: true,
              [styles.done]: isDone
          })

      } onClick={onClickIsDone}><Checkboxes isDone={isDone} onClickIsDone={onClickIsDone}/>{itemToDo} <DeleteItem /></span>
    )
}

export default Item