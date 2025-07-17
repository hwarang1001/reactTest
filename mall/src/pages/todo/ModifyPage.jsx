import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";
import Header from "../../include/Header";
import useCustomMove from "../../hooks/useCustomMove";

const ModifyPage = () => {
  const { tno } = useParams();
  const { moveToList, moveToRead } = useCustomMove();
  return (
    <Container>
      <Header />
      <ModifyComponent
        tno={tno}
        moveToList={moveToList}
        moveToRead={moveToRead}
      />
    </Container>
  );
};
export default ModifyPage;
