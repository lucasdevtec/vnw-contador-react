import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count < 10) {
      setCount((count) => count + 1);
      console.log("Adicionou");
    }
  };
  const rem = () => {
    if (count >= 1) {
      setCount((count) => count - 1);
      console.log("Removeu");
    }
  };

  const start = () => {
    console.log("Start");
    let timer = setInterval(() => {
      rem();
    }, 1000);
  };

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className="card">
        <button onClick={add}>+</button>
        <p>{count}</p>
        <button onClick={rem}>-</button>
      </div>
      <button onClick={start}>START</button>
    </div>
  );
}
