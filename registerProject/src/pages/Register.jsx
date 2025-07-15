import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MemberDispatchContext } from "../App";
const Register = () => {
  const { onInsert } = useContext(MemberDispatchContext);
  const nav = useNavigate();
  const onSubmit = (input) => {
    onInsert(
      input.id,
      input.passWord,
      input.name,
      input.email,
      input.createdDate.getTime()
    );
    //뒤로가기 방지하면서 / 페이지 이동
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        title={"회원 가입"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default Register;
