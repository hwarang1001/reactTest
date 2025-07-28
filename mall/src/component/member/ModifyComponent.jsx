import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { modifyMember } from "../../api/MemberApi";
import InfoModal from "../common/InfoModal";
import useCustomLogin from "../../hooks/useCoustomLogin";

const initState = {
  email: "",
  pw: "",
  nickname: "",
};

export default function ModifyComponent() {
  const [member, setMember] = useState(initState);
  const loginInfo = useSelector((state) => state.loginSlice);
  const [result, setResult] = useState();
  const [infoModalOn, setInfoModalOn] = useState(false);
  const { moveToLogin } = useCustomLogin();

  useEffect(() => {
    setMember({ ...loginInfo, pw: "ABCD" });
  }, [loginInfo]);
  const handleChange = (e) => {
    member[e.target.name] = e.target.value;
    setMember({ ...member });
  };
  // 수정요청 버튼
  const handleClickModify = () => {
    modifyMember(member).then((result) => {
      setResult("Modified");
      setInfoModalOn(true);
    });
  };

  const closeModal = () => {
    setResult(null);
    moveToLogin();
  };

  return (
    <>
      {result ? (
        <InfoModal
          show={infoModalOn}
          title={`회원정보`}
          content={"정보수정완료"}
          callbackFn={closeModal}
        ></InfoModal>
      ) : (
        <></>
      )}
      <h2 className="text-center mb-3">Login Component</h2>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          name="email"
          type="text"
          placeholder="name@example.com"
          value={member.email}
          onChange={handleChange}
          disabled="true"
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control
          name="pw"
          type="password"
          placeholder="Password"
          value={member.pw}
          onChange={handleChange}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="nickname">
        <Form.Control
          name="nickname"
          type="text"
          placeholder="member nickname"
          value={member.nickname}
          onChange={handleChange}
        />
      </FloatingLabel>
      <div className="d-grid gap-2 mt-3">
        <Button variant="outline-primary" onClick={handleClickModify}>
          수정하기
        </Button>
      </div>
    </>
  );
}
