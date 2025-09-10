import styled, { css } from 'styled-components';
import { LaboratoryRouteLayout } from '../../style/laboratoryRoute.style.js';

// Theme logic: expects theme.mode to be 'laboratory' or 'high-tech'
const laboratoryTheme = css`
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  color: #e0f7fa;
  .error-message { color: #ff0055; }
  .success-message { color: #00ffe7; }
  .delete-btn, .delete-confirm-btn { color: #ff0055; }
  .modal-overlay {
    background: rgba(44, 83, 100, 0.85);
  }
`;

const highTechTheme = css`
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #e0e0e0;
  .error-message { color: #ff3366; }
  .success-message { color: #00ffe7; }
  .delete-btn, .delete-confirm-btn { color: #ff3366; }
  .modal-overlay {
    background: rgba(35, 37, 38, 0.92);
  }
`;

export const ProfileLayout = styled(LaboratoryRouteLayout)`
  min-height: 100vh;
  padding: 2.5rem 1rem 3rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mode === 'high-tech' ? highTechTheme : laboratoryTheme}

  main {
    width: 100%;
    max-width: 480px;
    background: rgba(0,0,0,0.25);
    border-radius: 1.2rem;
    box-shadow: 0 0 1.5rem 0.2rem #00ffe7;
    padding: 2rem 2.5rem 2.5rem 2.5rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;
    label {
      font-family: Orbitron, monospace;
      font-size: 1.1rem;
      margin-bottom: 0.2rem;
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
    input {
      font-family: Ubuntu_Reg, Arial, sans-serif;
      font-size: 1.1rem;
      padding: 0.5rem 0.75rem;
      border: 1.5px solid #00ffe7;
      border-radius: 0.5rem;
      background: #181c20;
      color: #e0f7fa;
      margin-top: 0.2rem;
      transition: border-color 0.2s, box-shadow 0.2s;
      &:focus {
        border-color: #00ffe7;
        box-shadow: 0 0 0.25rem 0.1rem #00ffe7;
        outline: none;
      }
    }
    .delete-btn {
      align-self: flex-end;
      font-weight: bold;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      margin-left: auto;
      transition: color 0.2s;
      &:hover { text-decoration: underline; }
    }
    button {
      font-family: Orbitron, monospace;
      font-size: 1.1rem;
      padding: 0.6rem 1.2rem;
      border-radius: 0.5rem;
      border: none;
      background: #00ffe7;
      color: #181c20;
      margin-top: 0.5rem;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      &.delete-btn, &.delete-confirm-btn {
        background: none;
        color: #ff0055;
        border: 1.5px solid #ff0055;
      }
    }
  }

  .error-message, .success-message {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
  }

  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(2px);
  }
  .modal-content {
    background: #181c20;
    border-radius: 1rem;
    box-shadow: 0 0 1.5rem 0.2rem #00ffe7;
    padding: 2rem 2.5rem;
    min-width: 320px;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    color: #e0f7fa;
    h3 { margin-bottom: 0.5rem; }
    input.delete-password-input {
      width: 100%;
      margin-bottom: 0.5rem;
      border: 1.5px solid #ff0055;
      background: #232526;
      color: #fff;
    }
    .delete-error {
      color: #ff0055;
      margin-bottom: 0.5rem;
    }
    .delete-confirm-btn {
      color: #ff0055;
      border: 1.5px solid #ff0055;
      background: none;
      margin-right: 1rem;
    }
    .delete-cancel-btn {
      background: #00ffe7;
      color: #181c20;
    }
    .modal-save-btn {
      background: #00ffe7;
      color: #181c20;
    }
    .modal-cancel-btn {
      background: #232526;
      color: #e0f7fa;
      border: 1.5px solid #00ffe7;
    }
  }

  @media (max-width: 600px) {
    main {
      padding: 1rem 0.5rem;
    }
    .modal-content {
      padding: 1rem 0.5rem;
      min-width: 90vw;
    }
  }
`;

export const FormError = styled.span`
  color: #ff0055;
  font-size: 0.95rem;
  font-family: Ubuntu_Reg, Arial, sans-serif;
  margin-top: 0.2rem;
`;