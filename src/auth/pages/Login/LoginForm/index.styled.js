import styled from 'styled-components';

export const FormStyle = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 32rem;
  min-width: 260px;
  margin: 2rem auto;
  padding: 2rem 1.5rem;
  border: 1.5px solid var(--special-blue);
  border-radius: 0.75rem;
  background-color: #007bff4d;
  box-shadow: 0 2px 16px 0 var(--special-blue);
  box-sizing: border-box;
  gap: 1.5rem;

  .fields-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .form-field {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 1.15rem;
    font-family: Orbitron, sans-serif;
    color: #EEE;
    margin-bottom: 0.25rem;
    letter-spacing: 0.03em;
  }

  input {
    font-size: 1.15rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #EEE;
    border-radius: 0.5rem;
    background-color: #f7f7f7;
    color: #222;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
  }

  input:focus {
    border-color: var(--special-blue);
    box-shadow: 0 0 0.25rem 0.1rem var(--special-blue);
  }

  button,
  button[type='submit'] {
    width: 100%;
    font-size: 1.15rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    padding: 0.75rem;
    border: 1.5px solid var(--special-blue);
    border-radius: 0.5rem;
    background-color: var(--special-blue);
    color: #EEE;
    box-shadow: 0 2px 8px 0 var(--special-blue);
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s, border-radius 0.3s, box-shadow 0.3s;
    outline: none;
  }

  button:focus,
  button[type='submit']:focus {
    border-color: var(--special-blue);
    box-shadow: 0 0 0.25rem 0.1rem var(--special-blue);
    outline: 2px solid var(--special-blue);
  }

  button:hover,
  button[type='submit']:hover {
    background-color: #EEE;
    color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px 0 var(--special-blue);
  }

  .field-error {
    color: #ff0055;
    font-size: 0.95rem;
    margin-left: 0.5rem;
    text-align: right;
    font-family: Ubuntu_Reg, Arial, sans-serif;
  }

  .message-container {
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.05rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    box-sizing: border-box;
    text-align: center;
  }
  .message-container.error, .message-container.ERROR {
    background: #ff005511;
    color: #ff0055;
    border: 1px solid #ff0055;
  }
  .message-container.success, .message-container.SUCCESS {
    background: #00ffe711;
    color: #00ffe7;
    border: 1px solid #00ffe7;
  }

  .error-message {
    color: #ff0055;
    font-size: 0.95rem;
    margin-top: 0.25rem;
    text-align: left;
  }

  .submit-btn {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  input[type='submit'],
  input[type='button'] {
    width: 100%;
    font-size: 1.15rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    padding: 0.75rem;
    border: 1.5px solid var(--special-blue);
    border-radius: 0.5rem;
    background-color: var(--special-blue);
    color: #EEE;
    box-shadow: 0 2px 8px 0 var(--special-blue);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-radius 0.3s, box-shadow 0.3s;
  }

  input[type='submit']:hover,
  input[type='button']:hover {
    background-color: #EEE;
    color: var(--special-blue);
    border-radius: 0.5rem;
    box-shadow: 0 2px 12px 0 var(--special-blue);
  }

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
    max-width: 98vw;
    .fields-container {
      gap: 0.75rem;
    }
    .submit-btn {
      margin-top: 1rem;
    }
    input,
    input[type='submit'],
    input[type='button'] {
      font-size: 1rem;
      padding: 0.5rem;
    }
    label {
      font-size: 1rem;
    }
  }
`