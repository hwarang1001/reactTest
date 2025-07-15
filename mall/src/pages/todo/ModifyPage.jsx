import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import ModifyComponent from "../../components/todo/ModifyComponent";
const ModifyPage = () => {
  return (
    <Container>
      <Header />
      <ModifyComponent />
    </Container>
  );
};
export default ModifyPage;
