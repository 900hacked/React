import { useState } from "react";

function Multiple() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  console.log(inputs);

  return (
    <>
      <form>
        <label>
          Location: <br />
          <input
            type="text"
            name="location"
            value={inputs.location}
            onChange={handleChange}
          />{" "}
          <br />
        </label>

        <label>
          Email Address: <br />
          <input
            type="text"
            name="emailAddress"
            value={inputs.emailAddress}
            onChange={handleChange}
          />{" "}
          <br />
        </label>

        <label>
          P.O Box Number: <br />
          <input
            type="text"
            name="poBox"
            value={inputs.poBox}
            onChange={handleChange}
          />{" "}
          <br />
        </label>

        <p>
          Current Values: {inputs.location} {inputs.emailAddress} {inputs.poBox}
        </p>
      </form>
    </>
  );
}

export default Multiple;
