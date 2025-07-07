const MemberTbl = ({ User, userList }) => {
  return (
    <div>
      <h1>회원 정보 출력</h1>
      <hr></hr>
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <User key={"user" + index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberTbl;
