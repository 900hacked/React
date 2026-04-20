import Grandchild from "./Grandchild";

function Child({ kid }) {
  return (
    <>
      <h1>Child</h1>
      <p>This the child</p>
      <Grandchild muzukulu={kid} />
    </>
  );
}
export default Child;
