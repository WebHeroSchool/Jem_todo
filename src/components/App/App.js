import React from "react";
import InputItem from "../InputItem/inputItem.js";
import ItemList from "../ItemList/itemList.js"
import Footer from "../Footer/footer.js"



const App = () => (<div>
    <h1>to do</h1>
    <InputItem />
    <ItemList />
    <Footer />
</div>)

export {App}