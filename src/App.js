import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const changeColor = useRef();

  useEffect(() => {
    const time = setInterval(() => {
      if (changeColor.current.style.backgroundColor === "cyan") {
        return (changeColor.current.style.backgroundColor = "coral");
      }
      if (changeColor.current.style.backgroundColor === "coral") {
        return (changeColor.current.style.backgroundColor = "cyan");
      }
      return (changeColor.current.style.backgroundColor = "cyan");
    }, 800);

    return () => clearInterval(time);
  });

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        margin: "auto",
        marginTop: "100px",
        borderRadius: "10%",
      }}
      ref={changeColor}
    ></div>
  );
}

export default App;
