import { useState } from "react";
import InputWrap from "./InputWrap";
const RegistWrap = ({ registUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const onClickBtn = () => {
    registUser(name, age, gender, phone);
    setName("");
    setAge("");
    setGender("");
    setPhone("");
  };
  return (
    <div className="regist-wrap">
      <h3>회원 정보 등록</h3>
      <hr></hr>
      <InputWrap text="이름" data={name} setData={setName} />
      <InputWrap text="나이" data={age} setData={setAge} />
      <InputWrap text="성별" data={gender} setData={setGender} />
      <InputWrap text="전화번호" data={phone} setData={setPhone} />
      <button onClick={onClickBtn}>회원등록</button>
    </div>
  );
};
export default RegistWrap;
