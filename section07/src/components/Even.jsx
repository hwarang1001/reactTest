import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    console.log("Even mount");
    return () => {
      console.log("Even unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
