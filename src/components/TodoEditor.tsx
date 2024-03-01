import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/action";
import "../assets/scss/TodoEditor.scss";

const TodoEditor = () => {
  const [text, setText] = useState("");
  const idRef = useRef(0);
  const dispatch = useDispatch();
  const onClickAdd = () => {
    dispatch(addTodo({ id: idRef.current++, content: text }));
    setText("");
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="todoEditor">
      <input
        className="inputEditor"
        value={text}
        onChange={onChangeInput}
        onKeyDown={(e) => {
          if (e.keyCode === 13) onClickAdd();
        }}
        placeholder="할 일을 입력하세요."
      />
      <button className="addBtn" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
};

export default TodoEditor;
