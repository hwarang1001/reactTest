import { useSearchParams } from "react-router-dom";

const New = () => {
  const [searchParams, SetSearchParams] = useSearchParams();
  const updateNameParam = (name, age) => {
    SetSearchParams({ name: name, age: age });
  };
  return (
    <div>
      New ? {searchParams.get("name")} <br />
      New ? {searchParams.get("age")} <br />
      <button
        onClick={() => {
          updateNameParam("kdj", "20");
        }}
      >
        쿼리스트링 값변경하기
      </button>
    </div>
  );
};
export default New;
