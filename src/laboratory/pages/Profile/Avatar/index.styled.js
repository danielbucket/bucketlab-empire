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
    border: none;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.mode === 'high-tech' ? highTechTheme : laboratoryTheme}

  .image-preview {
    flex-grow: 1;
    margin-bottom: 1rem;
    img {
      width: 14rem;
      height: 14rem;
      border-radius: 50%;
      object-fit: cover;
      transition: border 0.2s, box-shadow 0.2s;
    }
  }

  .input-wrapper {
    height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    gap: 1rem;
    input[type='file'] {
      flex-grow: 1;
      width: 100%;
      max-width: 320px;
      padding: 0.5rem;
      border: 1.5px solid #00ffe7;
      border-radius: 6px;
      background: #232526;
      color: #e0f7fa;
      box-shadow: 0 0 8px #00ffe7 inset;
      outline: none;
      &:focus {
        box-shadow: 0 0 16px #00ffe7, 0 0 8px #232526 inset;
        border-color: #00ffe7;
      }
    }
  }

  .button-group {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    button {
      font-family: Orbitron, monospace;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 8px;
      padding: 0.5rem 1.2rem;
      box-shadow: 0 0 8px #00ffe7;
      transition: box-shadow 0.2s, transform 0.1s, background 0.2s, color 0.2s;
      outline: none;
      &:hover {
        box-shadow: 0 0 12px #00ffe7, 0 0 8px #232526 inset;
        transform: translateY(-2px);
      }
      &:active {
        transform: translateY(0);
        box-shadow: 0 0 8px #00ffe7 inset;
      }
      &:disabled {
        background: #ccc;
        color: #666;
        cursor: not-allowed;
        box-shadow: none;
        transform: none;
      }
    }
  }

  .avatar-error {
    color: #ff0055;
    font-size: 0.95rem;
    font-family: Ubuntu_Reg, Arial, sans-serif;
    margin-top: 0.2rem;
  }

  @media (max-width: 600px) {
    .image-preview img {
      width: 8rem;
      height: 8rem;
    }
    .input-wrapper {
      flex-direction: column;
      height: auto;
      gap: 0.5rem;
    }
    .button-group button {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;