import React from "react";
import styles from "./Item.module.css";
import classnames from "classnames";

const Item = ({itemToDo, isDone}) => (<span className={
    classnames({
        [styles.item]: true,
        [styles.done]: isDone
    })
}>{itemToDo}</span>)

export default Item