function And(props) {
  return (
    <>
      {props.gender && (
        <h1>
          if she is {props.gender}, she will get an extra point at the
          university
        </h1>
      )}

      {props.score > 90 && <h1>The girl is brilliant</h1>}

      {props.name == "Muhoozi" && <h1>He is the president is son</h1>}
    </>
  );
}

export default And;
