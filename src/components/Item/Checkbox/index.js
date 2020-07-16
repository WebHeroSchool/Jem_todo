import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  return (
    <div>
      <Checkbox
        defaultChecked
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}
