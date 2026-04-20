import { useReducer, useState } from "react";

const initialState = {
  monthlyIncome: "",
  annualIncome: 0,
  tax: 0,
};

function taxReducer(state, action) {
  switch (action.type) {
    case "Set_Monthly_Income":
      return {
        ...state,
        monthlyIncome: action.payload,
      };

    case "Calculate_Tax":
      const annualIncome = state.monthlyIncome * 12;
      const tax = annualIncome * 0.15;

      return {
        ...state,
        annualIncome,
        tax,
      };

    case "Reset":
      return {
        monthlyIncome: "",
        annualIncome: 0,
        tax: 0,
      };
    default:
      return state;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(taxReducer, initialState);

  const handleC = (e) => {
    dispatch({ type: "Set_Monthly_Income", payload: Number(e.target.value) });
  };

  const cTax = () => {
    dispatch({ type: "Calculate_Tax" });
  };

  const rst = () => {
    dispatch({ type: "Reset" });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Enter monthly income"
        value={state.monthlyIncome}
        onChange={handleC}
      />

      <button onClick={cTax}>Calculate Tax</button>

      <button onClick={rst}>Reset</button>

      <h3>Annual Income: {state.annualIncome}</h3>
      <h3>Tax: {state.tax}</h3>
    </div>
  );
}

//do an example and think of a scenario where you need a usereducer hook

export default Reducer;
