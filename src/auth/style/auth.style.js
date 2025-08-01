import styled from "styled-components";

export const AuthLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100vh;
  width: 100%;

  background-image: url(${(props) => props.$pageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;