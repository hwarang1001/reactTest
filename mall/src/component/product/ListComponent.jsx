import { useState, useEffect } from "react";
import { getList } from "../../api/ProductApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";
import { Container, Card, Row } from "react-bootstrap";
import FetchingModal from "../common/FetchingModal";
import { API_SERVER_HOST } from "../../api/MemberApi";
import useCustomLogin from "../../hooks/useCoustomLogin";

const host = API_SERVER_HOST;

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListComponent = () => {
  const { page, size, moveProductToList, moveProductToRead, refresh } =
    useCustomMove();
  const [serverData, setServerData] = useState(initState);
  const [fetching, setFetching] = useState(false);
  const { exceptionHandle } = useCustomLogin();
  useEffect(() => {
    setFetching(true);
    getList({ page, size })
      .then((data) => {
        setServerData(data);
        setFetching(false);
      })
      .catch((err) => exceptionHandle(err));
  }, [page, size, refresh]);

  return (
    <>
      <Container className="px-5 justify-content-center mb-5">
        {fetching ? <FetchingModal /> : <></>}
        <Row className="display-content-around mt-5 gap-4">
          {serverData.dtoList.map((product) => (
            <>
              <Card
                className="p-3"
                style={{ width: "14rem", height: "20rem" }}
                key={product.pno}
                onClick={() => moveProductToRead(product.pno)}
              >
                <Card.Body>
                  <Card.Title>PNO :{product.pno}</Card.Title>
                  <Card.Title>NAME : {product.pname}</Card.Title>
                  <Card.Title>PRICE : {product.price}원</Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
                <img
                  alt="product"
                  src={`${host}/api/products/view/s_${product.uploadFileNames[0]}  `}
                  style={{ height: "9rem" }}
                />
              </Card>
            </>
          ))}
        </Row>
        <PageComponent
          serverData={serverData}
          moveToList={moveProductToList}
        ></PageComponent>
      </Container>
    </>
  );
};

export default ListComponent;
