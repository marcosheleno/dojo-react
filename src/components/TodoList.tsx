import React, {Component} from "react"
import { Item } from "./Interfaces/Item";
import { List } from "./Interfaces/List";

function TodoList(id: string){
    return (
        <ol id={id}>
        </ol>
    );
}
export default TodoList