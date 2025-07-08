import "./MemberTbl.css";
const MemberTbl = ({ userList }) => {
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
          </tr>
        </thead>
        <tbody>
          {userList.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
              <td>{data.phone}</td>
              <button>삭제</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTbl;
