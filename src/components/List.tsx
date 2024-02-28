import { Todo } from "../types";
import TodoItem from "./TodoItem";
import "../assets/scss/List.scss";

interface Props {
  todos: Todo[];
  onClickDelete: (id: number) => void;
}

const List = ({ todos, onClickDelete }: Props) => {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onClickDelete={onClickDelete} />
      ))}
    </div>
  );
};

export default List;
