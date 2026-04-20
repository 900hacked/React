import { useEffect, useState } from "react";

function Practice() {
  const [loop, setLoop] = useState();
  const [button, setButton] = useState();

  const lpp = () => {
    setLoop(6);
  };

  useEffect(() => {
    for (let i = 1; i <= 50; i++) {
      console.log(i);
    }
  }, [button]);

  return (
    <>
      <button onClick={lpp}>Click</button>
      <p>the value is {loop}</p>
    </>
  );
}

export default Practice;
