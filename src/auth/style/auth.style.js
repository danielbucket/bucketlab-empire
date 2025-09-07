import styled from "styled-components";

export const AuthBaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100%;
  padding-bottom: 5rem;

  background-image: url(${(props) => props.$pageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;