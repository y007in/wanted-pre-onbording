import { useState } from "react";
import "../assets/scss/TodoEditor.scss";

interface Props {
  onClickAdd: (text: string) => void;
}

const TodoEditor = ({ onClickAdd }: Props) => {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClickAdd = () => {
    onClickAdd(text);
    setText("");
  };
  return (
    <div className="todoEditor">
      <input
        className="inputEditor"
        value={text}
        onChange={onChangeInput}
        placeholder="할 일을 입력하세요."
      />
      <button className="addBtn" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
};

export default TodoEditor;
