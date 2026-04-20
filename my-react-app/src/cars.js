function Cars() {
  const brand = "Subaru";
  const model = "BRZ";

  const x = "MyCar";

  const myfunc = () => {
    console.log("Hello");
  };

  const para = () => {
    console.log("Formula 1");
  };

  const vehicle = {
    brandName: "Ford",
    model: "F-150 Raptor",
    year: "2023",
  };
  return (
    <>
      <h1>I Love Cars </h1>
      <h1 onClick={para}>I love motorsport racing</h1>
      <h1>
        My Car is a {vehicle.brandName} {vehicle.model} {vehicle.year}
      </h1>
      <p className={x}>Lexus IS350</p>
      <button onMouseOver={myfunc}>Click me</button>
      <p>Do you love cars?</p>
      <button>Yes</button>
      <button>No</button>

      <p>
        I own a {brand} {model}
      </p>
    </>
  );
}

export default Cars;
