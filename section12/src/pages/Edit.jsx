import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
const Edit = () => {
  const params = useParams();
  // 공동자료(이벤트)
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  // 공동자료(모든 일기정보)
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  // 공동자료에 선택한 다이어리 정보 상태관리
  const [curDiaryItem, setCurDiaryItem] = useState();

  // 마운트될 때, params.id가 변경될 때 리렌더링
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentDiaryItem) {
      nav("/", { replace: true });
      return;
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);
  // 일기 삭제
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(Number(params.id));
      nav("/", { replace: true });
    }
  };
  // 수정 완료
  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        Number(params.id),
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  };
  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
