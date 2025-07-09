import "./MemberTbl.css";
const MemberTbl = ({ userList, onDelete, onEdit }) => {
  const onClickDeleteBtn = (id) => {
    onDelete(id);
  };
  const onClickUpdateBtn = (data) => {
    onEdit(data);
  };
  return (
    <div className="member_tbl">
      <h1>회원 정보 출력</h1>
      <hr></hr>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.phone}</td>
              <td className="button">
                <button onClick={() => onClickUpdateBtn(data)}>수정</button>
                <button onClick={() => onClickDeleteBtn(data.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTbl;
