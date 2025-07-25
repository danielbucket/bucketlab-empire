import { useNavigate }  from 'react-router-dom';
import { StyledEmailError } from './index.styled';

export default function EmailError ({ email }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/homelab/login', {
      state: { isNew: false, email }
    });
  };
  
  return (
    <StyledEmailError>
      <p>An account with that email already exists.</p>
      <button onClick={() => handleClick()}>Login</button>
    </StyledEmailError>
  );
};