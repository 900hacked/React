import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Comp from "./comp";
import Cars from "./cars";
import Phone from "./phone";
import Compo from "./Compo";
import Status from "./Status";
import App from "./App";
import Pension from "./Pension";
import Demo from "./demo";
import File from "./File";
import Bar from "./Props";
import Destructuring from "./Des";
import Pple from "./Props";
import Arr from "./Props";
import Animal from "./Animal";
// import Spread from "./spread";
import Parent from "./Parent";
import Rest from "./Rest";
import Events from "./Events";
import Sum from "./comp";
import Condition from "./Conditional";
import And from "./ConditionalAnd";
import Lists from "./MyList";
import ListTwo from "./ListTwo";
import Forms from "./ReactForms";
import Login from "./LoginForm";
import TextArea from "./TextArea";
import Select from "./Select";
import Multiple from "./MultipleInputs";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import StyledCompo from "./CssInJs";
import Sass from "./Sass";
import Portal from "./portal";
import Portaltwo from "./portal2";
import PortalThree from "./portal3";
import Modal from "./modal";
import Appss from "./modalApp";
import Fetch from "./fetchData";
import reportWebVitals from "./reportWebVitals";
import Fdata from "./fData";
import Router from "./Router";
import Effect from "./useEffect";
import Timer from "./Timer";
import Example from "./useEffectExample";
import SearchBar from "./Transitions";
import TransitionTwo from "./Transition2";
import Forward from "./forward";
import Grandchild from "./Grandchild";
import Jajja from "./Jajja";
import Callb from "./Callback";
import Practice from "./Practice";
import Practicetwo from "./practice2";
import Reducer from "./UseReducer";
import BmiR from "./bmiReducer";

const myElement = (
  <ol>
    <li>Milk</li>
    <li>Banana</li>
    <li>Eggs</li>
    <li>Bread</li>
  </ol>
);
let sen = <h1>REACT APP</h1>;

let den = (
  <div>
    <p>I am coding using React</p>
  </div>
);

const age = <p>In february i will be {50 + 1} years old</p>;

const para = (
  <div>
    <p>paragraph 1</p>
    <p>para2</p>
  </div>
);

const frag = (
  <>
    <p>fragment 1</p>
    <p>fragment 2</p>
  </>
);

const person = {
  names: "James Jackson",
  age: "32 year old",
  gender: "male",
};

const Car = ["Toyota", "Land Cruiser"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BmiR />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
