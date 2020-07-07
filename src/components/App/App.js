import React from "react";
import InputItem from "../InputItem";
import {ItemList, len} from "../ItemList";

import Footer from "../Footer"



const App = () => (<div>
    <h1>to do</h1>
    <InputItem />
    <ItemList />
    <Footer count={len} />
</div>)


export {App}