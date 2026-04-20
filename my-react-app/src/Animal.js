function Animal(props) {
  const { name, category, species } = props;

  return (
    <>
      <p>
        A {name} is a {category} animal
      </p>
    </>
  );
}

export default Animal;
