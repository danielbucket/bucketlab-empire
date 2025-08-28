import styled from 'styled-components';
import LogOut from '../Logout/Logout';

export default function UserMenu({ logged_in }) {

  return (
    <UserMenuContainer>
      {logged_in && <LogOut />}
      <div>Logged In: {logged_in ? 'Yes' : 'No'}</div>

    </UserMenuContainer>
  );
}

const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // width: 30rem;
  border: 1px solid #eee;
`;
