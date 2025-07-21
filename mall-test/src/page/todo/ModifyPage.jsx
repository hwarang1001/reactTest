import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../../include/Header";
import ModifyComponent from "../../component/todo/ModifyComponent";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveToRead } = useCustomMove();
  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
        <ModifyComponent
          tno={tno}
          moveToList={moveToList}
          moveToRead={moveToRead}
        />
      </div>
    </Container>
  );
};
export default ModifyPage;
