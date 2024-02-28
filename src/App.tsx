import { useRef, useState } from "react";
import "./App.scss";
import TodoEditor from "./components/TodoEditor";
import { Todo } from "./types";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0); //id증가

  const onClickAdd = (text: string) => {
    setTodos([...todos, { id: idRef.current++, content: text }]);
  };
  const onClickDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <div className="todoList">
        <h1>Todo</h1>
        <TodoEditor onClickAdd={onClickAdd} />
        <List todos={todos} onClickDelete={onClickDelete} />
      </div>
    </div>
  );
}

export default App;
