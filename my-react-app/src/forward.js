import { useRef } from "react";

function Forward() {
  let inn = useRef();

  const handleC = () => {
    // inn.current.focus();
    console.log(inn.current.value);
  };

  const fButton = () => {
    inn.current.focus();
  };

  return (
    <>
      <input onChange={fButton} />
      <button onClick={handleC} ref={inn}>
        CLICK
      </button>
    </>
  );
}

export default Forward;
