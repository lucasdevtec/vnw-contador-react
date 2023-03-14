import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const add = () => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  };
  const rem = () => {
    if (count >= 1) {
      setCount((count) => count - 1);
    }
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className="card">
        <button onClick={add}>count is {count}</button>
        <p>{count}</p>
        <button onClick={rem}>count is {count}</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
