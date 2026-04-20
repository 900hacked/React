function Demo() {
  const height = 5.6;
  const food = "meat";

  let description = height > 6 ? "She is tall" : "She is short";

  return (
    <>
      <p>{description}</p>
      <p>{food == "meat" ? "She is Carnivorous" : " She is habivorous"}</p>
    </>
  );
}

export default Demo;
