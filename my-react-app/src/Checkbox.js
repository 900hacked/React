import { useState } from "react";

function Checkbox() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    let fillings = "";
    if (inputs.tomato) {
      fillings += " tomato ";
    }
    if (inputs.onion) {
      if (inputs.tomato) {
        fillings += " and ";
      }
      fillings += " onion ";
    }
    if (fillings == "") {
      fillings = "no fillings";
    }
    alert(`${inputs.firstName} wants a burger with ${fillings}`);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          My name is: <br />
          <input
            type="text"
            name="firstName"
            value={inputs.firstName}
            onChange={handleChange}
          />
        </label>
        <p>
          I want a burger with: <br />
        </p>
        <input
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
        <label>Tomato:</label>
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
        <label>Onion:</label> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Checkbox;
