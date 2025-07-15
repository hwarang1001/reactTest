import Button from "./Button";
import { useNavigate } from "react-router-dom";
import "./MemberItem.css";

const MemberItem = ({ no, id, passWord, name, email, createdDate }) => {
  const nav = useNavigate();

  const goEditPage = () => {
    nav(`/edit/${no}`);
  };
  return (
    <tr className="MemberItem">
      <td>{id}</td>
      <td>{passWord}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{new Date(createdDate).toLocaleDateString()}</td>
      <td>
        <Button text={"수정하기"} onClick={goEditPage} />
      </td>
    </tr>
  );
};

export default MemberItem;
