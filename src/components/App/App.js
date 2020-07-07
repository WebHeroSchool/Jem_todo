import React from "react";
import InputItem from "../InputItem";
import * as list from "../ItemList"
import Footer from "../Footer"



const App = () => (<div>
    <h1>to do</h1>
    <InputItem />
    <list.ItemList />
    <Footer count={list.toDoTasks.length} />
</div>)


export {App}