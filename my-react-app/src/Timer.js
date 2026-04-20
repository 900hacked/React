import { useEffect, useState } from "react";
function Timer() {
  const [count, setCount] = useState(0);
  const [currentYear, setCurrentYear] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [currentYear]);

  const change = () => {
    setCurrentYear("2026");
  };

  const info = () => {
    setName("Dorian");
  };

  return (
    <>
      <h1>I've rendered {count} times!</h1>
      <button onClick={change}>Click me</button>
      <p>{currentYear} is the current Year</p>
      <br />
      <button onClick={info}>Click here</button>
      <p>My name is {name}</p>
    </>
  );
}

export default Timer;
