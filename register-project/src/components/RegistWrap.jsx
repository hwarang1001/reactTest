import { useState } from "react";
import "./RegistWrap.css";

const RegistWrap = ({ registUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const onClickRegister = () => {
    registUser(name, age, gender, phone);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };
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
  return (
    <div className="regist-wrap">
      <h1>회원 정보 등록</h1>
      <hr></hr>
      <div className="input_wrap">
        <label>{"이름"}</label>
        <input type="text" value={name} onChange={onChangeName} />
      </div>
      <div className="input_wrap">
        <label>{"나이"}</label>
        <input type="text" value={age} onChange={onChangeAge} />
      </div>
      <div className="input_wrap">
        <label>{"성별"}</label>
        <input type="text" value={gender} onChange={onChangeGender} />
      </div>
      <div className="input_wrap">
        <label>{"전화번호"}</label>
        <input type="text" value={phone} onChange={onChangePhone} />
      </div>
      <div className="button_wrap">
        <button onClick={onClickRegister}>회원등록</button>
      </div>
    </div>
  );
};
export default RegistWrap;
