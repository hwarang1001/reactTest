import "./App.css";
import Header from "./components/Header";
import Edit from "./components/Edit";
import List from "./components/List";
import { useRef, useReducer, useCallback } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: "Spring Boot 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "오토바이 1시간 타기",
    date: new Date().getTime(),
  },
];
function reducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...todos];
    case "UPDATE":
      return todos.map((data) => {
        return data.id === action.data
          ? { ...data, isDone: !data.isDone }
          : data;
      });
    case "DELETE":
      return todos.filter((data) => {
        return data.id !== action.data;
      });
    default:
      return todos;
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 삽입
  const onInsert = useCallback((content) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // 수정
  const onUpdate = useCallback((tagId) => {
    dispatch({
      type: "UPDATE",
      data: tagId,
    });
  }, []);

  // 삭제
  const onDelete = useCallback((tagId) => {
    dispatch({
      type: "DELETE",
      data: tagId,
    });
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <Edit onInsert={onInsert} />
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
