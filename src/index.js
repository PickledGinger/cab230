import React, { useState } from "react";
import ReactDOM from "react-dom";

function LikeCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };

  const superLike = () => {
    setCount((oldCount) => oldCount + 10);
  };

  const reset = () => {
    setCount((oldCount) => 0);
  };

  return (
    <div className="App">
      <h1>Likes Simulator</h1>
      <p>Overall Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superLike}>SUPER! LIKE!</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
