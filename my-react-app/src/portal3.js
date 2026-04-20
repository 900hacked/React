import { useState } from "react";
import Portaltwo from "./portal2";

function PortalThree() {
  const [state, setState] = useState(false);

  const fun = () => {
    setState(true);
  };

  const sun = () => {
    setState(false);
  };
  return (
    <>
      <button onClick={fun}>Click Here to load the modal</button>

      <Portaltwo isOpen={state} onClose={sun} />
    </>
  );
}

export default PortalThree;
