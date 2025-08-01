import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100vh;
  background-color: var(--ac-sand);
  color: var(--ac-brown);
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  // padding: 2rem;
`;

export const StyledImage = styled.div`
  background-image: url(${props => props.$pageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  max-width: 60rem;
  height: 70%;
  border-radius: 0.5rem;
  box-shadow: rgba(14, 102, 240, 0.92) 0px 0px 0.25rem 0.25rem;
`;

export const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: 1.6rem;

  margin-top: 1rem;
`;