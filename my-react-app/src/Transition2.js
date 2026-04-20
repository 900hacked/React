// import { useState } from "react";
// import Tfetch from "./TransitionFetch";

// function TransitionTwo() {
//   const [currentState, setState] = useState("");

//   const [isPending, startTransition] = useTransition();

//   const [currentInfo, setInfo] = useState("");

//   const handleC = (e) => {
//     setState(e.target.value);
//     startTransition((e) => setInfo(e.target.value));
//   };

//   return (
//     <>
//       <input onChange={handleC} value={currentState} />
//       {isPending && <p>Loading results...</p>}
//       <Tfetch searchPhrase={currentInfo} />
//     </>
//   );
// }

// export default TransitionTwo;
