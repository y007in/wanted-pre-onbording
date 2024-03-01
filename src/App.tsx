import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import TodoEditor from "./components/TodoEditor";
import { Todo, ADD_TODO, DELETE_TODO } from "./types";
import { addTodo, deleteTodo } from "./store/action";
import List from "./components/List";

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const idRef = useRef(0); //id증가

  // const onClickAdd = (text: string) => {
  //   setTodos([...todos, { id: idRef.current++, content: text }]);
  // };
  // const onClickDelete = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  const todos = useSelector((state: any) => state.todos);
  // const dispatch = useDispatch();
  // const onClickAdd = (text: string) => {
  //   dispatch({
  //     type: "ADD_TODO",
  //     payload: {
  //       id: idRef.current++,
  //       content: text,
  //     },
  //   });
  // };

  // const onClickDelete = (id: number) => {
  //   dispatch({
  //     type: "DELETE_TODO",
  //     id: id,
  //   });
  // };
  useEffect(() => {
    console.log(todos);
  }, [todos]);

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
