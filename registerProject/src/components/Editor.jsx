import "./Editor.css";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Editor = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
    id: "",
    passWord: "",
    name: "",
    email: "",
    createdDate: new Date(),
  });
  useEffect(() => {
    if (initData) {
      console.log("initData:", initData);
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    //날짜를 수정한다면 날짜로 변경하라.
    if (name === "createdDate") {
      value = new Date(value);
    }
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };
  const nav = useNavigate();
  return (
    <div className="Editor">
      <section className="input_section">
        <h4>아이디</h4>
        <input
          type="text"
          name="id"
          value={input.id}
          onChange={onChangeInput}
        />
        <h4>패스워드</h4>
        <input
          type="password"
          name="passWord"
          value={input.passWord}
          onChange={onChangeInput}
        />
        <h4>이름</h4>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={onChangeInput}
        />
        <h4>이메일</h4>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onSubmitButtonClick}
        />
      </section>
    </div>
  );
};

export default Editor;
