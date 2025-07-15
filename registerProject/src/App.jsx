import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Member from "./pages/Member";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import { useReducer, useRef, createContext } from "react";
const mockData = [
  {
    no: 1,
    id: "test",
    passWord: "test",
    name: "홍길동",
    email: "qwe123@naver.com",
    createdDate: new Date().getTime(),
  },
  {
    no: 2,
    id: "test2",
    passWord: "test2",
    name: "고길동",
    email: "asd456@naver.com",
    createdDate: new Date().getTime(),
  },
  {
    no: 3,
    id: "test3",
    passWord: "test3",
    name: "저길동",
    email: "zxc789@naver.com",
    createdDate: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.no) === String(action.data.no) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.no) !== String(action.no));
    default:
      return state;
  }
}
export const MemberStateContext = createContext();
export const MemberDispatchContext = createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const noRef = useRef(4);
  // 회원 추가
  const onInsert = (id, passWord, name, email, createdDate) => {
    dispatch({
      type: "INSERT",
      data: {
        no: noRef.current++,
        id,
        passWord,
        name,
        email,
        createdDate,
      },
    });
  };

  // 회원 수정
  const onUpdate = (no, id, passWord, name, email, createdDate) => {
    dispatch({
      type: "UPDATE",
      data: {
        no,
        id,
        passWord,
        name,
        email,
        createdDate,
      },
    });
  };

  // 회원 삭제
  const onDelete = (no) => {
    dispatch({
      type: "DELETE",
      no,
    });
  };
  return (
    <>
      <MemberStateContext.Provider value={data}>
        <MemberDispatchContext.Provider
          value={{ onInsert, onUpdate, onDelete }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/member/:no" element={<Member />} />
            <Route path="/edit/:no" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </MemberDispatchContext.Provider>
      </MemberStateContext.Provider>
    </>
  );
}

export default App;
