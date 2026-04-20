import { useState } from "react";

function BMI() {
  const [height, setHeight] = useState();
  let weight = 67;
  height = 1.75;

  const calc = () => {
    weight / (height * height);
  };

  const hii = () => {
    setHeight();
  };

  return (
    <>
      <p>My body mass Index is {calc}</p>
      <button onClick={hii}>Click</button>
    </>
  );
}

export default BMI;
