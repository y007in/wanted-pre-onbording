import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import TodoEditor from "./components/TodoEditor";
import { Todo, ADD_TODO, DELETE_TODO } from "./types";
import { addTodo, deleteTodo } from "./store/action";
import List from "./components/List";

function App() {
  return (
    <div className="container">
      <div className="todoList">
        <h1>Todo</h1>
        <TodoEditor />
        <List />
      </div>
    </div>
  );
}

export default App;
