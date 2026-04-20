import { useState } from "react";

function Forms() {
  const [currentState, setCurrentState] = useState("Dorian");
  console.log(currentState);

  const inn = (e) => {
    setCurrentState(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={inn} value={currentState} />
      <input type="password" onChange={inn} />
    </>
  );
}

export default Forms;
