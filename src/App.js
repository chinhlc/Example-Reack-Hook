import React, { useState, useCallback } from "react";
import { Hello, Wrap } from "./Hello";
import { Square } from "./Square";

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(
    n => {
      setCount(c => c + n);
    }, [setCount]);

  return (
    <div>
      {/* Example one */}
      <Hello increment={increment} />
      <div>count: {count}</div>
      {favoriteNums.map(n => {
        return <Square increment={increment} n={n} key={n} />;
      })}
      {/* Example Two */}
      <Wrap />
    </div>
  );
};

export default App;
