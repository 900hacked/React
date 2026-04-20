import { useState } from "react";

function Select() {
  const [myCar, setMycar] = useState("");

  const handleChange = (e) => {
    setMycar(e.target.value);
  };

  return (
    <>
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value={"Ford"}>Bugatti</option>
          <option value={"Ferrari"}>Ferrari</option>
          <option value={"Mclaren"}>Mclaren</option>
          <option value={"Porsche"}>Porsche</option>
        </select>
      </form>
    </>
  );
}

export default Select;
