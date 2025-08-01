import { Container } from "react-bootstrap";
import Header from "../include/Header";
const AboutPage = () => {
  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
        <button className="btn btn-outline-secondary" type="button">
          About page
        </button>
      </div>
    </Container>
  );
};
export default AboutPage;
