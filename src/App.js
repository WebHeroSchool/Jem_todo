import React from "react";

// Components
const ItemList = () => (<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>)

const App = () => (<div>
      {ItemList()}
    </div>)

export {App}
