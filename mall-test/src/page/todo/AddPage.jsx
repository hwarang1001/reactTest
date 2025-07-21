import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../include/Header";
import AddComponent from "../../component/todo/AddComponent";
export default function AddPage() {
  return (
    <Container>
      <Header />
      <div className="d-grid gap-2 mt-5">
        <AddComponent />
      </div>
    </Container>
  );
}
