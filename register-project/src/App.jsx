import "./App.css";
import MemberTbl from "./components/MemberTbl";
import RegistWrap from "./components/RegistWrap";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    { name: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
    { name: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
    { name: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
  ]);

  const registUser = (name, age, gender, phone) => {
    const user = { name, age, gender, phone };
    setUserList([...userList, user]);
  };
  return (
    <div className="App">
      <MemberTbl User={User} userList={userList} />
      <RegistWrap registUser={registUser} InputWrap={InputWrap} />
    </div>
  );
}

const User = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
    </tr>
  );
};

const InputWrap = (props) => {
  const text = props.text;
  const data = props.data;
  const setData = props.setData;
  const changeInputValue = (e) => {
    setData(e.target.value);
  };
  return (
    <div className="input_wrap">
      <label>{text}</label>
      <input type="text" value={data} onChange={changeInputValue} />
    </div>
  );
};

export default App;
