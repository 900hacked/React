import { useReducer, useState } from "react";

const initialState = {
  heightM: "",
  weightKg: "",
};

function calcBmi(state, action) {
  switch (action.type) {
    case "Set_Height":
      return {
        ...state,
        heightM: action.payload,
      };
    case "Set_Weight":
      return {
        ...state,
      };
  }
}

function BmiR() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const handleC = () => {
    console.log(height, weight);
  };

  const cWeight = (e) => {
    setWeight(e.target.value);
  };

  const cHeight = (e) => {
    setHeight(e.target.value);
  };

  const [weightHeight, setBmi] = useReducer(calcBmi, initialState);

  return (
    <>
      <input
        placeholder="Enter weight in kg"
        style={{ marginLeft: 20 }}
        value={weight}
        onChange={cWeight}
      />{" "}
      <br />
      <input
        placeholder="Enter Height in m"
        style={{ marginLeft: 20 }}
        value={height}
        onChange={cHeight}
      />{" "}
      <br />
      <button style={{ marginLeft: 20 }} onClick={handleC}>
        Calculate
      </button>
      <p>Your BMI is:</p>
    </>
  );
}

export default BmiR;
