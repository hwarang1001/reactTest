import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      bg="primary"
      data-bs-theme="dark"
      className="bg-body-primary"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">MAIN</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <NavDropdown title="TODO" className="bg-body-primary" bg="primary">
              <NavDropdown.Item href="/todo/list">LIST</NavDropdown.Item>
              <NavDropdown.Item href="/todo/add">ADD</NavDropdown.Item>
              <NavDropdown.Item href="/todo/read/3">READ</NavDropdown.Item>
              <NavDropdown.Item href="/todo/modify/5">MODIFY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
