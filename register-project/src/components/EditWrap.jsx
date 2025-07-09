import { useState, useEffect } from "react";
import "./EditWrap.css";

const EditWrap = ({ user, onUpdate, onCancel }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  // 수정 대상이 바뀌면 입력값 초기화
  useEffect(() => {
    setName(user.name);
    setAge(user.age);
    setGender(user.gender);
    setPhone(user.phone);
  }, [user]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  // 제출 핸들러
  const handleSubmit = (e) => {
    onUpdate(user.id, { name, age, gender, phone });
  };

  return (
    <div className="edit-wrap">
      <h1>회원 정보 수정</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="input_wrap">
          <label>이름</label>
          <input type="text" value={name} onChange={onChangeName} />
        </div>
        <div className="input_wrap">
          <label>나이</label>
          <input type="text" value={age} onChange={onChangeAge} />
        </div>
        <div className="input_wrap">
          <label>성별</label>
          <select value={gender} onChange={onChangeGender}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </div>
        <div className="input_wrap">
          <label>전화번호</label>
          <input type="text" value={phone} onChange={onChangePhone} />
        </div>
        <div className="button_wrap">
          <button type="submit">수정 완료</button>
          <button type="button" onClick={onCancel}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditWrap;
