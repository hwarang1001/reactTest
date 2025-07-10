import "./List.css";
import ListItem from "./ListItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";
const List = () => {
  const { todos } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };

  const getFilterTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((data) =>
      data.content.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterTodos = getFilterTodos();

  // 렌더링 할 때 전체값, done값, notdone값 저장
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((data) => {
      return data.isDone === true;
    }).length;
    const notDoneCount = totalCount - doneCount;
    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List🌱 </h4>
      <div>
        <p>totalCount : {totalCount}</p>
        <p>doneCount : {doneCount}</p>
        <p>notDoneCount : {notDoneCount}</p>
      </div>
      <input
        value={search}
        onChange={onChangeInput}
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {filterTodos.map((data) => {
          return <ListItem key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};
export default List;
