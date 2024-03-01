import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../types";
import { deleteTodo } from "../store/action";
import "../assets/scss/List.scss";

const List = () => {
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  const onClickDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="list">
      {todos.map((todo: any) => (
        <div className="todoItem" key={todo.id}>
          <div className="item">
            <input type="checkbox" className="inputBox" />
            <span>{todo.content}</span>
          </div>
          <button className="delBtn" onClick={() => onClickDelete(todo.id)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
