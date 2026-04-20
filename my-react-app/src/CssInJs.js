import styled from "styled-components";

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

function StyledCompo() {
  return (
    <>
      <MyHeader>Welcome!</MyHeader>
    </>
  );
}

export default StyledCompo;
