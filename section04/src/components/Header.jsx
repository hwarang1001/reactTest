import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);
  const [light, setlight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          style={{ border: "1px solid black" }}
          onClick={(e) => {
            setlight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "OFF" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          style={{ border: "1px solid black" }}
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Header;
