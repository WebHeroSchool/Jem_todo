import React from "react";

export {App}

export const elem = (<p style={{
                      width: 300,
                      height: 300,
                      border: "3px solid black",
                      fontSize: 20,
                      color: "magenta",
                      textAlign: "center"
                    }}>"Hello World!"</p>);

// Components
const Element = () => (<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>)
const App = () => (<div>
      {Element()}
    </div>)

