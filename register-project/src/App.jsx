import "./App.css";
import MemberTbl from "./components/MemberTbl";
import RegistWrap from "./components/RegistWrap";
import EditWrap from "./components/EditWrap";
import { useState, useRef } from "react";

const mockData = [
  { id: 0, name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
  { id: 1, name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
  { id: 2, name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
];

function App() {
  const [userList, setUserList] = useState(mockData);
  const idRef = useRef(3);
  const [editTarget, setEditTarget] = useState(null); // 수정 대상 유저 상태
  // 삽입
  const registUser = (name, age, gender, phone) => {
    const newUser = { id: idRef.current++, name, age, gender, phone };
    setUserList([...userList, newUser]);
  };
  // 수정 시작
  const onEdit = (user) => {
    setEditTarget(user);
  };

  // 수정 저장
  const onUpdate = (id, updatedData) => {
    setUserList((userList) =>
      userList.map((user) =>
        user.id === id ? { ...user, ...updatedData } : user
      )
    );
    setEditTarget(null); // 폼 숨기기
  };
  // 수정 취소
  const onCancel = () => {
    setEditTarget(null);
  };
  // 삭제
  const onDelete = (tagId) => {
    setUserList(
      userList.filter((data) => {
        return data.id !== tagId;
      })
    );
  };
  return (
    <div className="App">
      <MemberTbl userList={userList} onDelete={onDelete} onEdit={onEdit} />
      {editTarget === null && <RegistWrap registUser={registUser} />}
      {editTarget && (
        <EditWrap user={editTarget} onUpdate={onUpdate} onCancel={onCancel} />
      )}
    </div>
  );
}

export default App;
