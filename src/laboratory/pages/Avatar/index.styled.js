import styled, { css } from 'styled-components';

const laboratoryTheme = css`
  background: none;

  .image-preview img {
    border: 2px solid #00ffe7;
    box-shadow: 0 0 1.5rem 0.2rem #00ffe7;
  }

  .button-group button {
    background: linear-gradient(90deg, #00ffe7 0%, #2c5364 100%);
    color: #181c20;

    &:hover {
      background: #00ffe7;
      color: #2c5364;
    }

    &.delete-btn {
      background: none;
      color: #ff0055;
      border: 1.5px solid #ff0055;
    }
  }
`;

const highTechTheme = css`
  background: none;

  .image-preview img {
    border: 2px solid #00ffe7;
    box-shadow: 0 0 1.5rem 0.2rem #00ffe7;
  }
  .button-group button {
    background: linear-gradient(90deg, #00ffe7 0%, #414345 100%);
    color: #232526;
    border: none;

    &:hover {
      background: #232526;
      color: #00ffe7;
    }

    &.delete-btn {
      background: none;
      color: #ff3366;
      border: 1.5px solid #ff3366;
    }
  }
`;

export const ProfileImageStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 16px 0 #007bff;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  min-width: 320px;
  max-width: 420px;
  width: 100%;
  gap: 2rem;

  .image-preview {
    position: relative;
    height: 10rem;
    width: 10rem;
    
    &.loading {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        border: 4px solid rgba(0, 123, 255, 0.3);
        border-top-color: #007bff;
        animation: spin 1s linear infinite;
        z-index: 1;
      }
    }
    
    .loading-indicator {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #007bff;
      font-weight: bold;
      z-index: 2;
      background-color: rgba(255, 255, 255, 0.7);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }
    
    img {
      height: 10rem;
      width: 10rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #007bff;
      box-shadow: 0 0 1.5rem 0.2rem #007bff;
      background: #f7f7f7;
      transition: opacity 0.3s ease;
      
      &.loading-opacity {
        opacity: 0.6;
      }
    }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
  }

  input[type='file'] {
    width: 100%;
    max-width: 320px;
    padding: 0.5rem;
    border: 1.5px solid #007bff;
    border-radius: 6px;
    background: #f7f7f7;
    color: #222;
    box-shadow: 0 0 8px #007bff inset;
    outline: none;
  }

  input[type='file']:focus {
    box-shadow: 0 0 16px #007bff, 0 0 8px #f7f7f7 inset;
    border-color: #007bff;
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    width: 100%;
  }

  button {
    font-family: Orbitron, monospace;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 8px;
    padding: 0.5rem 1.2rem;
    box-shadow: 0 0 8px #007bff;
    background: #007bff;
    color: #fff;
    border: none;
    transition: box-shadow 0.2s, transform 0.1s, background 0.2s, color 0.2s;
    cursor: pointer;
  }

  button:hover {
    background: #0056b3;
    color: #fff;
    box-shadow: 0 0 12px #007bff, 0 0 8px #f7f7f7 inset;
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0);
    box-shadow: 0 0 8px #007bff inset;
  }

  button:disabled {
    background: #ccc;
    color: #666;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }

  .avatar-error {
    color: #ff3366;
    font-size: 0.95rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    margin-top: 0.2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    .image-preview img {
      width: 8rem;
      height: 8rem;
    }
    padding: 1rem;
    gap: 1rem;
  }
`;