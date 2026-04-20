function Events() {
  const Run = () => {
    console.log("She is running");
  };

  const Add = (a, b) => {
    alert(a + b);
  };

  const info = (names, x) => {
    console.log(x.type);
  };

  return (
    <>
      <button onClick={Run}>Press to run</button>
      <button onMouseOver={Run}> dont click</button>
      <button onClick={() => Add(10, 5)}>press to add</button>
      <button onClick={() => info("Dorian")}>My name is ...</button>
      <button onClick={(eve) => info("67 years", eve)}>How old are you?</button>
      <button onMouseOver={(even) => info("Married", even)}>Status</button>
    </>
  );
}

export default Events;
