import Header from "../components/Header";
import Button from "../components/Button";
import MemberList from "../components/MemberList";
import { MemberStateContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const data = useContext(MemberStateContext);
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"회원리스트"}
        rightChild={
          <Button text={"회원등록"} onClick={() => nav("/register")} />
        }
      />
      <MemberList data={data} />
    </div>
  );
};
export default Home;
