import { useState, React } from "react";
import { Button, Container, Form } from "react-bootstrap";
import useCustomMove from "../../hooks/useCustomMove";
import { postAdd } from "../../api/TodoApi";
import InfoModal from "../common/InfoModal";

const initState = { title: "", writer: "", dueDate: "" };
export default function AddComponent() {
  const [todo, setTodo] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();
  const [infoModalOn, setInfoModalOn] = useState(false);

  const handleChangeTodo = (e) => {
    todo[e.target.name] = e.target.value;
    setTodo({ ...todo });
  };

  const handleClickAdd = () => {
    postAdd(todo)
      .then((result) => {
        console.log(result);
        setResult(result.TNO);
        setInfoModalOn(true);
        setTodo({ ...initState }); // 초기화
      })
      .catch((e) => {
        console.error(e);
      });
    console.log(todo);
  };
  const closeModal = () => {
    setInfoModalOn(false);
    moveToList();
  };

  return (
    <Container className="px-5 justify-content-center shadow-sm rounded">
      <InfoModal
        show={infoModalOn}
        onHide={() => setInfoModalOn(false)}
        title={`ADD RESULT`}
        content={`New ${result} Added`}
        callbackFn={() => closeModal()}
      />
      <h2 className="text-center">일기장 추가</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={todo.title}
            onChange={handleChangeTodo}
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>WRITER</Form.Label>
          <Form.Control
            name="writer"
            type="text"
            value={todo.writer}
            onChange={handleChangeTodo}
            placeholder="Enter Writer"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>DUEDATE</Form.Label>
          <Form.Control
            name="dueDate"
            type="date"
            value={todo.dueDate}
            onChange={handleChangeTodo}
            placeholder="Enter dueDate"
          />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2 mb-4">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleClickAdd}
        >
          저장하기
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
}
