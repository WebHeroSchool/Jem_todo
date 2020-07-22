import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(isDone, onClickIsDone) {
  debugger;
  return (
    <div>
      <Checkbox
        onClick={() => onClickIsDone(isDone)}
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
