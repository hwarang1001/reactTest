import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import ReadComponent from "../../components/todo/ReadComponent";
export default function ReadPage() {
  return (
    <Container>
      <Header />
      <ReadComponent />
    </Container>
  );
}
