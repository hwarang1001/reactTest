import Modal from "react-bootstrap/Modal";

const FetchingModal = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title> 서버전송 상태</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Loading ...... </p>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};
export default FetchingModal;
