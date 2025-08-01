import { styled } from 'styled-components';

export const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 100vh;
  width: 100%;

  padding: 1rem;
  border: 0.15rem solid var(--ac-brown);

  background-image: url(${(props) => props.$pageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  border: 0.1rem solid var(--special-blue);
  border-radius: 0.5rem;
  background-color: #007bff4d;
  box-shadow: 0 0 0.25rem 0.25rem var(--special-blue);

  
  margin-top: 0.5rem;
  width: 100%;
  height: 4rem;

    span {
      color: #ffd452b8;
      font-family: Orbitron;
      color: #EEE;
      font-size: 1.2rem;
    }

    button:hover {
      cursor: pointer;
      color: var(--special-blue);
      transition: color 0.3s ease-in-out;
    }
  }
`;