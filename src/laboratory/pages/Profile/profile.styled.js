import styled, { css } from 'styled-components';
import { ProfileBaseStyle } from './ProfileBaseStyle';

// Theme logic: expects theme.mode to be 'laboratory' or 'high-tech'
const laboratoryTheme = css`
  background: linear-gradient(135deg, #0f2027 0%, #2c5364 100%);
  color: #e0f7fa;

  .error-message {
		color: #ff0055;
	}

  .success-message {
		color: #00ffe7;
	}

  .delete-btn, .delete-confirm-btn {
		color: #ff0055;
	}

  .modal-overlay {
    background: rgba(44, 83, 100, 0.85);
  }
`;

const highTechTheme = css`
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: #e0e0e0;

  .error-message {
		color: #ff3366;
	}

  .success-message {
		color: #00ffe7;
	}

  .delete-btn, .delete-confirm-btn {
		color: #ff3366;
	}

  .modal-overlay {
    background: rgba(35, 37, 38, 0.92);
  }
`;

export const ProfileLayout = styled(ProfileBaseStyle)`
  padding: 3rem 0 5rem 0;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    width: 100%;
    margin: 2rem auto 0 auto;
    background: #007bff4d;
    border-radius: 1.2rem;
    box-shadow: 0 2px 16px 0 var(--special-blue);
    padding: 2.5rem 2rem;
    box-sizing: border-box;
  }

  .status-message {
    border: 1px solid #007bff;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    color: #007bff;
    background: #e3f0ff;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;
  }

  label {
    font-family: Orbitron, monospace;
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
    color: #007bff;
  }

  input {
    font-family: Ubuntu_Reg, Arial, sans-serif;
    font-size: 1.1rem;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid #007bff;
    border-radius: 0.5rem;
    background: #f7f7f7;
    color: #222;
    margin-top: 0.2rem;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
  }

  input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0.25rem 0.1rem #007bff;
  }

  button {
    font-family: Orbitron, monospace;
    font-size: 1.1rem;
    padding: 0.6rem 1.2rem;
    border-radius: 0.5rem;
    border: none;
    background: #007bff;
    color: #fff;
    margin-top: 0.5rem;
    cursor: pointer;
    box-shadow: 0 2px 8px 0 #007bff;
    transition: background 0.2s, color 0.2s;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .delete-btn, .delete-confirm-btn {
    background: none;
    color: #ff3366;
    border: 1.5px solid #ff3366;
  }

  .delete-btn:hover, .delete-confirm-btn:hover {
    background: #ff3366;
    color: #fff;
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
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 16px 0 #007bff;
    padding: 2rem;
    max-width: 400px;
    width: 100%;
  }
`;

export const FormError = styled.span`
  color: #ff0055;
  font-size: 0.95rem;
  font-family: Ubuntu_Reg, Arial, sans-serif;
  margin-top: 0.2rem;
`;