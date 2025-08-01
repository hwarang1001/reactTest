import { useEffect, useState } from "react";
import { Form, Container } from "react-bootstrap";
import { getOne, putOne, deleteOne } from "../../api/TodoApi";
import InfoModal from "../common/InfoModal";

const initState = {
  tno: 0,
  title: "",
  writer: "",
  dueDate: "",
  complete: false,
};

const ModifyComponent = ({ tno, moveToList }) => {
  const [todo, setTodo] = useState({ ...initState });
  //모달창을 활성화 여부
  const [infoModalOn, setInfoModalOn] = useState(false);
  //post 방식 입력완료후 결과값을 저장 상태
  const [result, setResult] = useState(null);

  useEffect(() => {
    getOne(tno).then((data) => {
      setTodo(data);
      console.log(data);
    });
  }, [tno]);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  //수정버튼이벤트처리
  const handleClickModify = () => {
    putOne(todo).then((data) => {
      console.log("modify result: " + data);
      setResult(data.RESULT);
      //모달창 활성화
      setInfoModalOn(true);
    });
  };

  //삭제버튼 이벤트처리
  const handleClickDelete = () => {
    deleteOne(tno).then((data) => {
      console.log("modify result: " + data);
      setResult(data.RESULT);
      //모달창 활성화
      setInfoModalOn(true);
    });
  };

  //모달창을 close
  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
  };

  return (
    <Container className="px-5 justify-content-center shadow-sm rounded">
      <InfoModal
        show={infoModalOn}
        title={`RESULT`}
        content={`${result}`}
        callbackFn={closeModal}
      />
      <h2 className="text-center">일기장 수정하기</h2>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>TNO</Form.Label>
          <Form.Control
            value={tno}
            type="text"
            placeholder="Enter no"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>WRITER</Form.Label>
          <Form.Control
            value={todo.writer}
            type="text"
            placeholder="Enter writer"
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={todo.title}
            placeholder="Enter title"
            onChange={handleChangeTodo}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>DATE</Form.Label>
          <Form.Control
            name="dueDate"
            value={todo.dueDate}
            type="date"
            onChange={handleChangeTodo}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>COMPLETE</Form.Label>
          <Form.Select
            name="complete"
            value={todo.complete}
            onChange={handleChangeTodo}
          >
            <option value="true">Completed</option>
            <option value="false">Not Yet</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button
          className="btn btn-success"
          type="button"
          onClick={handleClickModify}
        >
          수정하기
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={handleClickDelete}
        >
          삭제하기
        </button>
        <button
          className="btn btn-secondary"
          type="text"
          onClick={() => {
            moveToList();
          }}
        >
          목록가기
        </button>
      </div>
    </Container>
  );
};
export default ModifyComponent;
