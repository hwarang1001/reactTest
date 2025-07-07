import "./App.css";
import { useState, useEffect } from "react";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`mount count = ${count} input = ${input} `);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
  };
  const onClickInputButton = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <section>
        <input
          value={input}
          name={"phone"}
          onChange={onClickInputButton}
          type="text"
        />
      </section>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
