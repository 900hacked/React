function Status() {
  const age = 18;
  let stat = "adult";

  if (age >= 18) {
    stat = "adult";
  } else {
    stat = "Minor";
  }

  return (
    <>
      <p>{stat}</p>
    </>
  );
}

export default Status;
