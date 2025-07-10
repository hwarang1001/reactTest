import "./ListItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
const ListItem = ({ id, isDone, content, date }) => {
  console.log(`고차컴포넌트 리스트 아이템 ${id}`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckBox = () => {
    onUpdate(id);
  };
  const onClickBtn = () => {
    onDelete(id);
  };
  return (
    <div className="ListItem">
      <input type="checkbox" checked={isDone} onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickBtn}>삭제</button>
    </div>
  );
};
export default memo(ListItem);
