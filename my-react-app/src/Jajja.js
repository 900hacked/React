import { useState } from "react";
import Mother from "./Mother";

function Jajja() {
  const [user, setUser] = useState("Family");

  return (
    <>
      <h1>GrandMother</h1>
      <p>This is the grandmother</p>
      <Mother mom={user} />
    </>
  );
}
export default Jajja;
