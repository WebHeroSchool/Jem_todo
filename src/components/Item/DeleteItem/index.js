import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import styles from './DeleteItem.module.css'

const DeleteItem = () => {
  return(
    <button className={styles.button}>
      <FontAwesomeIcon icon={faTrash} />
    </button>

  )
}


export default DeleteItem