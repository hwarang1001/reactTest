import { useParams } from "react-router-dom";

const Member = () => {
  const params = useParams();
  console.log(params);
  return <div>{params.id}번 회원입니다 ~~</div>;
};
export default Member;
