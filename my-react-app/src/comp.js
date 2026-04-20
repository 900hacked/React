function Comp() {
  return (
    <>
      <h1>THIS IS A LIST OF MY FRIENDS</h1>
      <ol>
        <li>Malcom</li>
        <li>Victor</li>
        <li>Mubiru</li>
        <li>Mia</li>
      </ol>
    </>
  );
}

function Add(num) {
  return num + 45;
}

function Sum() {
  return (
    <>
      <p>The sum is {Add(80)}</p>
    </>
  );
}
export default Sum;
