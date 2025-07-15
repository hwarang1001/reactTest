import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { MemberDispatchContext, MemberStateContext } from "../App";
const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(MemberDispatchContext);
  const data = useContext(MemberStateContext); //전체 데이터를 가져오기
  const [curMemberItem, setCurMemberItem] = useState();
  useEffect(() => {
    const currentMemberItem = data.find(
      (item) => String(item.no) === String(params.no)
    );
    if (!currentMemberItem) {
      window.alert(`${params.no}`);
      nav("/", { replace: true });
    }

    setCurMemberItem(currentMemberItem);
  }, [params.no]);

  const onClickDelete = () => {
    if (window.confirm("회원정보를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      // 회원 삭제 로직
      onDelete(Number(params.no));
      //뒤로가기 방지
      nav("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("회원정보를 정말 수정할까요?")) {
      onUpdate(
        Number(params.no),
        input.id,
        input.passWord,
        input.name,
        input.email,
        input.createdDate
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"회원정보 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curMemberItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
