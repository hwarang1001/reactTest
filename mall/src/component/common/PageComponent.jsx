import { Container } from "react-bootstrap";

const PageComponent = ({ serverData, moveToList }) => {
  return (
    <Container className="d-flex justify-content-center mt-5">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          {serverData.prev ? (
            <li
              class="page-item"
              onClick={() => moveToList({ page: serverData.prevPage })}
            >
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
          ) : (
            <></>
          )}
          {serverData.pageNumList.map((pageNum) => {
            return serverData.current === pageNum ? (
              <li
                class="page-item active"
                onClick={() => moveToList({ page: pageNum })}
              >
                <a class="page-link" href="#">
                  {pageNum}
                </a>
              </li>
            ) : (
              <li
                class="page-item"
                onClick={() => moveToList({ page: pageNum })}
              >
                <a class="page-link" href="#">
                  {pageNum}
                </a>
              </li>
            );
          })}
          {serverData.next ? (
            <li
              class="page-item"
              onClick={() => moveToList({ page: serverData.nextPage })}
            >
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          ) : (
            <></>
          )}
        </ul>
      </nav>
    </Container>
  );
};
export default PageComponent;
