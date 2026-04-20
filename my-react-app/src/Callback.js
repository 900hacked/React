import { useCallback, useState } from "react";

function Callb() {
  const [radius, setRadius] = useState(0);
  const [area, setArea] = useState();

  const change = (e) => {
    setRadius(e.target.value);
  };

  const cArea = useCallback(() => {
    let myArea = 3.14 * (radius * radius);
    setArea(myArea);
  }, [radius]);

  return (
    <>
      <h2>Circle Area Calculator</h2>
      <input type="number" value={radius} onChange={change} /> <br />
      <button onClick={cArea}>Calculate</button>
      <h3>Area is {area}</h3>
    </>
  );
}
export default Callb;
