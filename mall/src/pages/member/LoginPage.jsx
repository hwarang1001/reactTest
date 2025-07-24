import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import LoginComponent from "../../component/member/LoginComponent";

const LoginPage = () => {
  return (
    <Container>
      <Header />
      <LoginComponent />
    </Container>
  );
};

export default LoginPage;
