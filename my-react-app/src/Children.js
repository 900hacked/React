function Students(props) {
  return (
    <>
      <div style={{ background: "blue" }}></div>
      <h2>Students</h2>
      <p>{props.children}</p>
    </>
  );
}

export default Students;
