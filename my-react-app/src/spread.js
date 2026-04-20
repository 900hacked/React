function Spread() {
  const arr1 = ["One", "Two", "Three"];
  const arr2 = ["Four", "Five", "Six"];

  return (
    <>
      <p>{...arr1}, {...arr2}</p>
    </>
  );
}

export default Spread;
