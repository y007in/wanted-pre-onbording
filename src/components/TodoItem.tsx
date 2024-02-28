import { useState } from "react";
import { Todo } from "../types";
import "../assets/scss/TodoItem.scss";
import { useSelector } from "react-redux";

interface Props {
  todo: Todo;
  onClickDelete: (id: number) => void;
}

const TodoItem = ({ todo, onClickDelete }: Props) => {
  const handleClickDelete = (id: number) => {
    onClickDelete(id);
  };
  return (
    <div className="todoItem">
      <div className="item">
        <input type="checkbox" className="inputBox" />
        <span>{todo.content}</span>
      </div>
      <button className="delBtn" onClick={() => handleClickDelete(todo.id)}>
        x
      </button>
    </div>
  );
};

export default TodoItem;
