//props stands for properties

function Bar(props) {
  const { day, time } = props;
  return (
    <>
      <h2>
        I am drinking on a {day} at {time}
      </h2>
    </>
  );
}
//object props

function Pple(prop) {
  return (
    <>
      <h2>
        My name is {prop.person.names}, I am a {prop.person.age}{" "}
        {prop.person.gender}
      </h2>
    </>
  );
}

//array props

function Arr(pro) {
  return (
    <>
      <h2>
        My Car is a {pro.car[0]} {pro.car[1]}
      </h2>
    </>
  );
}

export default Arr;
