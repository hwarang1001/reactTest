import { useState } from "react";

function useMyInput() {
  const [input, setInput] = useState("");
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  return [input, onChangeInput];
}
export default useMyInput;
