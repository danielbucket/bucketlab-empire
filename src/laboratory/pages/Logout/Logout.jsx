import { LogoutButton, LogoutIcon } from './logout.styled';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_URLS } from '../../../global.urls.js';

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate(PUBLIC_URLS.LOGIN, { replace: true });
  };

   return (
    <LogoutButton onClick={handleLogout}>
      <LogoutIcon />
      <span>Logout</span>
    </LogoutButton>
  );
};
