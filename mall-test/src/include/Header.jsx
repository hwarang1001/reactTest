import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    // <Navbar
    //   collapseOnSelect
    //   bg="primary"
    //   data-bs-theme="dark"
    //   className="bg-body-primary"
    // >
    //   <Container>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">MAIN</Nav.Link>
    //         <Nav.Link href="/about">ABOUT</Nav.Link>
    //         <NavDropdown title="TODO" className="bg-body-primary" bg="primary">
    //           <NavDropdown.Item href="/todo/list">LIST</NavDropdown.Item>
    //           <NavDropdown.Item href="/todo/add">ADD</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">예비용</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">Login</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">나만의 일기장</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/todo/add">일기 추가</Nav.Link>
            <Nav.Link href="/todo/list">일기 목록</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
