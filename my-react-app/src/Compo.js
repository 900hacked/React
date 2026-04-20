function Compo() {
  const laptop = {
    name: "Lenovo",
    model: "Thinkpad",
    year: "2024",
  };

  return (
    <>
      <h1>I Love PCs</h1>
      <p>
        I currently own a {laptop.name} {laptop.model}
      </p>
    </>
  );
}

export default Compo;
