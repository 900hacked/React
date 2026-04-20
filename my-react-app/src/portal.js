import { useState } from "react";
import "./portal.scss";
function Portal() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <>
      <div className="divOne">
        <p>This is my portal</p>
        <select value={selectedOption} onChange={handleChange}>
          <option value="">-- Choose one --</option>
          <option value="apple"> Apple</option>
          <option value="banana"> Banana</option>
          <option value="mango">Mango</option>
          <option value="grapes">Grapes</option>
          <option value="pear"> Pear</option>
          <option value="watermelon">WaterMelon</option>
          <option value="avocado"> Avocado</option>
        </select>

        <p>You selected: {selectedOption}</p>
      </div>
    </>
  );
}

export default Portal;
