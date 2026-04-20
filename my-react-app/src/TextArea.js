import { useState } from "react";

function TextArea() {
  const [mytxt, setMytxt] = useState("");

  const handleChange = (e) => {
    setMytxt(e.target.value);
  };

  return (
    <>
      <form>
        <label>
          Write here: <br></br>
          <textarea value={mytxt} onChange={handleChange} />
        </label>
        <p>Current Value: {mytxt}</p>
      </form>
    </>
  );
}

export default TextArea;
