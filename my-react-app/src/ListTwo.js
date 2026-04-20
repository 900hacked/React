function ListTwo() {
  const people = [
    {
      name: "John Doe",
      age: 25,
      gender: "Male",
      location: "New York",
    },
    {
      name: "Sarah Smith",
      age: 22,
      gender: "Female",
      location: "London",
    },
    {
      name: "Michael Johnson",
      age: 30,
      gender: "Male",
      location: "Toronto",
    },
    {
      name: "Amina Hassan",
      age: 27,
      gender: "Female",
      location: "Nairobi",
    },
  ];

  return (
    <>
      <ul>
        {people.map((k) => (
          <li>
            {k.name} {k.age}
            {k.gender}
            {k.location}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTwo;
