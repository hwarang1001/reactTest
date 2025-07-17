import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import AddComponent from "../../components/todo/AddComponent";
const AddPage = () => {
  return (
    <Container>
      <Header />
      <AddComponent />
    </Container>
  );
};

export default AddPage;
