import Child from "./Child";

function Mother({ mom }) {
  return (
    <>
      <h1>Mother</h1>
      <p>This is the mother</p>
      <Child kid={mom} />
    </>
  );
}

export default Mother;
