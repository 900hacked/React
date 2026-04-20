import { useEffect, useState } from "react";

function Effect() {
  const [age, setAge] = useState("23");
  const [height, setHeight] = useState("1.70m");

  const fat = () => {
    setAge("46");
  };

  useEffect(() => {
    setHeight("1.80m");
  }, [age]);

  return (
    <>
      <h1>USE EFFECT</h1>
      <button onClick={fat}>Click Me</button>
      <p>The value is {age}</p>
      <p>The value is {height}</p>
    </>
  );
}

export default Effect;
