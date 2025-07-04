import Bulb from "./components/Bulb";
import { useState } from "react";

export default function App() {
  const [light, setLight] = useState("OFF");
  return (
    <>
      <div>
        <Bulb light={light} />
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
    </>
  );
}
