import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {
  const { tno } = useParams();
  return (
    <Container>
      <Header />
      <ReadComponent tno={tno} />
    </Container>
  );
};
export default ReadPage;
