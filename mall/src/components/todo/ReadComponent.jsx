import { useParams } from "react-router";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
const ReadComponent = () => {
  const { tno } = useParams();
  return (
    <Container>
      <h1>To do ReadPage {tno}</h1>
    </Container>
  );
};
export default ReadComponent;
