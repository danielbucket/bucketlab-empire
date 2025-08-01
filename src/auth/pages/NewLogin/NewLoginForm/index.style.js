import { styled } from 'styled-components';

export const FormContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const FormStyle = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  border: 0.1rem solid var(--special-blue);
  border-radius: 0.5rem;
  background-color: var(--special-blue-trans);
  box-shadow: 0 0 0.25rem 0.25rem var(--special-blue);

  & .fields-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 98%;

    & .form-field {
      width: 98%;
      display: flex;
      flex-direction: column;
      height: 7rem;

      & div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.5rem;
        height: 2.5rem;

        & label {
          font-size: 2rem;
          font-family: Orbitron;
          color: #EEE;
          padding-left: 0.5rem;
        }

        & p {
          flex-grow: 1;
          font-size: 1rem;
          font-family: Ubuntu_Reg;
          color: var(--special-green);
          padding-left: 0.5rem;
          text-align: right;
        }
      }
      
      & input {
        font-size: 2rem;
        font-family: Ubuntu_Reg;
        padding: 0.5rem;
        border: 0.1rem solid #EEE;
        border-radius: 0.5rem;
        background-color: #EEE;
      }
    }
  }
  
  & .submit-btns {
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 98%;
    padding: 0 0.5rem;

    & input[type='submit'] {
      width: 100%;
      font-size: 2rem;
      font-family: Ubuntu_Reg;
      padding: 0.5rem;
      border: 0.1rem solid var(--special-blue);
      border-radius: 0.5rem;
      background-color: var(--special-blue);
      color: #EEE;
      box-shadow: 0 0 0.5rem 0.25rem var(--special-blue);
      
      &:hover {
        background-color: #EEE;
        color: var(--special-blue);
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0.25rem var(--special-blue);
        transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
      }
    }

    & input[type='button'] {
      width: 40%;
      border: none;
      background-color: var(--special-blue);
    
      &:hover {
        background-color: #EEE;
        color: var(--special-blue);
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0.25rem var(--special-blue);
        transition: background-color 0.5s, color 0.5s, border-radius 0.5s, box-shadow 0.5s;
      }
    }
  }
`