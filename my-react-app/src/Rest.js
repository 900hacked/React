function Rest({ brandName = "Samsung", category, ...rest }) {
  return (
    <>
      <h2>
        We have {rest.color} {brandName} {category} available
      </h2>
    </>
  );
}

export default Rest;
