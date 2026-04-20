function Eve() {
  const ven = () => {
    alert("Someone clicked this button");
  };
  return (
    <>
      <button onClick={ven}>CLICK HERE</button>
    </>
  );
}

export default Eve;
