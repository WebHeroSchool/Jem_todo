import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
  debugger;
  return (
    <div>
      <Checkbox
        checked={props.isDone}
        onClick={() => props.onClickIsDone(props.isDone)}
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
