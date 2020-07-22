import React from "react";
import styles from "./Item.module.css";
import classnames from "classnames";
import Checkboxes from "./Checkbox";
import DeleteItem from "./DeleteItem";

const Item = ({itemToDo, isDone, onClickIsDone}) => {
    debugger;
    return(
      <span className={ classnames({[styles.item]: true, [styles.done]: isDone })} >
          <Checkboxes onClickIsDone={onClickIsDone} isDone={isDone} />{itemToDo}
          <DeleteItem />
      </span>
    )
}

export default Item