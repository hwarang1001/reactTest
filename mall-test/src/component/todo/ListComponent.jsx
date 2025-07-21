import { useEffect, useState } from "react";
import { getList } from "../../api/TodoApi";
import useCustomMove from "../../hooks/useCustomMove";
import { Container, Table } from "react-bootstrap";
import PageComponent from "../common/PageComponent";
const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, moveToList, moveToRead, refresh } = useCustomMove();
  const [serverData, setServerData] = useState(initState);

  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data);
      setServerData(data);
    });
  }, [page, size, refresh]);
  return (
    <Container className="px-5 justify-content-center shadow-sm rounded">
      <h2 className="text-center mb-4">일기장 목록</h2>
      <Table bordered hover size="lg" className="shadow-sm rounded">
        <thead className="bg-dark text-white">
          <tr className="text-center">
            <th className="bg-secondary text-white">TNO</th>
            <th className="bg-secondary text-white">TITLE</th>
            <th className="bg-secondary text-white">WRITER</th>
            <th className="bg-secondary text-white">DATE</th>
          </tr>
        </thead>
        <tbody>
          {serverData.dtoList.map((todo) => (
            <tr
              key={todo.tno}
              onClick={() => moveToRead(todo.tno)}
              className="text-center table-row-hover"
            >
              <td>{todo.tno}</td>
              <td>{todo.title}</td>
              <td>{todo.writer}</td>
              <td>{todo.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PageComponent serverData={serverData} moveToList={moveToList} />
    </Container>
  );
};
export default ListComponent;
