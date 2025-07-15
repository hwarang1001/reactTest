import { useParams } from "react-router";
import { Container } from "react-bootstrap";
const ModifyComponent = () => {
  const { tno } = useParams();
  return (
    <Container>
      <h1>To do ModifyPage {tno}</h1>
    </Container>
  );
};
export default ModifyComponent;
