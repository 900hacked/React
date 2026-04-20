function Pension() {
  //above 60 with children female gets pension

  const age = 65;
  let eligibilty = "Eligible for pension";
  const sex = "female";
  const kids = true;

  if (age >= 60 && sex == "female" && kids == true) {
    eligibilty = "Eligible for pension";
  } else {
    eligibilty = "Not eligible for pension";
  }

  return (
    <>
      <p>{eligibilty}</p>
    </>
  );
}

export default Pension;
