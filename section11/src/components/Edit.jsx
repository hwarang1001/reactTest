import "./Edit.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Edit = () => {
  const { onInsert } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeInput = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (content === "") {
      window.alert("값을 입력해주세요");
      inputRef.current.focus();
      return;
    }
    onInsert(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (content === "") {
        window.alert("값을 입력해주세요");
        inputRef.current.focus();
        return;
      }
      onSubmit();
    }
  };
  return (
    <div className="Edit">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeInput}
        onKeyDown={onKeyDown}
        placeholder="새로운 Todo..."
        type="text"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Edit;
