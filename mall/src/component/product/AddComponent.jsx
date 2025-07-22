import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { postAdd } from "../../api/ProductApi";
import FetchingModal from "../common/FetchingModal";
import InfoMoadl from "../common/InfoModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = { pname: "", pdesc: "", price: 0, files: [] };
const AddComponent = () => {
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(false);
  const { moveProductToList } = useCustomMove();
  const uploadRef = useRef();
  const handleChangeProduct = (e) => {
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };
  const handleClickAdd = (e) => {
    const files = uploadRef.current.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    //other data
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    setFetching(true);
    postAdd(formData).then((data) => {
      setFetching(false);
      setResult(data.result);
    });
  };
  const closeModal = () => {
    setResult(null);
    moveProductToList();
  };
  return (
    <Container className="p-5">
      {fetching ? <FetchingModal /> : <></>}
      {result ? (
        <InfoMoadl
          show={true}
          title={"결과 상태"}
          content={`${result}번 등록 완료`}
          callbackFn={closeModal}
        />
      ) : (
        <></>
      )}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            name="pname"
            type="text"
            value={product.pname}
            onChange={handleChangeProduct}
            placeholder="Enter pname"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            name="pdesc"
            value={product.pdesc}
            as="textarea"
            rows={4}
            onChange={handleChangeProduct}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
            placeholder="Enter price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Files</Form.Label>
          <Form.Control ref={uploadRef} type="file" multiple="true" />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center gap-2 ">
        <Button variant="primary" type="button" onClick={handleClickAdd}>
          저장
        </Button>
      </div>
    </Container>
  );
};

export default AddComponent;
