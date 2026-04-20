import { useState } from "react";
import styles from "./radio.module.css";

function Radio() {
  const [selectedSchool, setSchool] = useState("");

  const handleChange = (e) => {
    setSchool(e.target.value);
  };

  const handleSubmit = (e) => {
    alert(`I go to ${selectedSchool}`);
    e.preventDefault();
  };

  const design = {
    color: "white",
    fontSize: "30px",
    fontFamily: "sans-serif",
  };

  const sign = {
    textAlign: "center",
    padding: "10px",
    color: "yellow",
  };

  return (
    <>
      <h1 className={styles.big}>Secondary Schools</h1>
      <form onSubmit={handleSubmit} className={styles.background}>
        <input
          type="radio"
          name="school"
          id="green"
          value="Greenhill"
          checked={selectedSchool === "Greenhill"}
          onChange={handleChange}
        />
        <label for="green" style={{ ...design, ...sign }}>
          Greenhill
        </label>{" "}
        <br />
        <input
          type="radio"
          name="school"
          id="gayaza"
          value="Gayaza High School"
          checked={selectedSchool === "Gayaza High School"}
          onChange={handleChange}
        />
        <label for="gayaza" style={{ color: "white" }}>
          Gayaza High School
        </label>{" "}
        <br />
        <input
          type="radio"
          name="school"
          id="smack"
          value="St Marys Kisubi"
          checked={selectedSchool === "St Marys Kisubi"}
          onChange={handleChange}
        />
        <label for="smack" style={design}>
          St Marys Kisubi
        </label>{" "}
        <br />
        <input
          type="radio"
          name="school"
          id="budo"
          value="Budo High School"
          checked={selectedSchool === "Budo High School"}
          onChange={handleChange}
        />
        <label
          for="budo"
          style={{ color: "white", fontFamily: "sans-serif", fontSize: "30px" }}
        >
          Budo High School
        </label>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Radio;
