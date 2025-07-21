import {
  createSearchParams,
  useParams,
  useSearchParams,
} from "react-router-dom";
import ReadComponent from "../../component/todo/ReadComponent";
import { Container } from "react-bootstrap";
import useCustomMove from "../../hooks/useCustomMove";
import Header from "../../include/Header";

const ReadPage = () => {
  const { tno } = useParams();
  const { moveToList, moveToModify } = useCustomMove();
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const queryStr = createSearchParams({ page, size }).toString();
  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
        <ReadComponent
          tno={tno}
          moveToList={moveToList}
          moveToModify={moveToModify}
        />
      </div>
    </Container>
  );
};
export default ReadPage;
