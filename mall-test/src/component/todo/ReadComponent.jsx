import { useEffect, useState, useRef } from "react";
import { getOne } from "../../api/TodoApi";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const initState = {
  tno: "",
  title: "",
  writer: "",
  dueDate: null,
  complete: false,
};
const ReadComponent = ({ tno, moveToList, moveToModify }) => {
  const [todo, setTodo] = useState(initState);

  useEffect(() => {
    getOne(tno).then((data) => {
      console.log(data);
      setTodo(data);
    });
  }, [tno]);

  return (
    <Container className="px-5 justify-content-center shadow-sm rounded">
      <h2 className="text-center">일기장 상세보기</h2>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>TNO</Form.Label>
          <Form.Control
            defaultValue={todo.tno}
            type="text"
            placeholder="Enter no"
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>WRITER</Form.Label>
          <Form.Control
            defaultValue={todo.writer}
            type="text"
            placeholder="Enter writer"
            readOnly
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>TITLE</Form.Label>
          <Form.Control
            type="text"
            defaultValue={todo.title}
            placeholder="Enter title"
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>DATE</Form.Label>
          <Form.Control defaultValue={todo.dueDate} type="text" readOnly />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>COMPLETE</Form.Label>
          <Form.Control
            value={todo.complete ? "Completed" : "Not Yet"}
            type="text"
            readOnly
          />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2  mb-4">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            moveToModify(todo.tno);
          }}
        >
          수정하기
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
export default ReadComponent;
