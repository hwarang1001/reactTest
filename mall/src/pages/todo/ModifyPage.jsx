import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import { useParams } from "react-router";
const ModifyPage = () => {
  const { tno } = useParams();
  return (
    <Container>
      <Header />
      <h1>To do ModifyPage {tno}</h1>
    </Container>
  );
};
export default ModifyPage;
