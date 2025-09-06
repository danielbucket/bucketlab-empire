import { LogoutButton, LogoutIcon } from './logout.styled';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/auth/login', { replace: true });
  };

   return (
    <LogoutButton onClick={handleLogout}>
      <LogoutIcon />
      <span>Logout</span>
    </LogoutButton>
  );
};
