import "./MemberList.css";
import MemberItem from "./MemberItem";
import { useState } from "react";
const MemberList = ({ data }) => {
  const [search, setSearch] = useState("");
  const onChangeInput = (e) => {
    setSearch(e.target.value);
  };
  const getFilterMembers = () => {
    if (search === "") {
      return data;
    }
    return data.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filterMembers = getFilterMembers();

  return (
    <div className="MemberList">
      <div className="search">
        <input
          value={search}
          onChange={onChangeInput}
          placeholder="이름으로 검색하세요."
        />
      </div>
      <table className="member_table">
        <thead className="thead">
          <tr>
            <th>아이디</th>
            <th>비밀번호</th>
            <th>이름</th>
            <th>이메일</th>
            <th>생성일</th>
            <th>작업</th>
          </tr>
        </thead>
        <tbody>
          {filterMembers.map((item) => (
            <MemberItem key={item.no} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
