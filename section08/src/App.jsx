import "./App.css";
import Header from "./components/Header";
import Edit from "./components/Edit";
import List from "./components/List";
import { useState, useRef } from "react";

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // 삽입
  const onInsert = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  // 수정
  const onUpdate = (tagId) => {
    setTodos(
      todos.map((data) => {
        return data.id === tagId ? { ...data, isDone: !data.isDone } : data;
      })
    );
  };

  // 삭제
  const onDelete = (tagId) => {
    setTodos(
      todos.filter((data) => {
        return data.id !== tagId;
      })
    );
  };
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
