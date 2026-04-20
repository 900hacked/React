function Lists() {
  const drinks = ["Soda", "Water", "Juice", "Beer"];

  return (
    <>
      <ul>
        {drinks.map((k) => (
          <li>I drink {k}</li>
        ))}
      </ul>
    </>
  );
}

export default Lists;
