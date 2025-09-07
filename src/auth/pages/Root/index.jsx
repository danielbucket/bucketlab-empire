import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthRouteLayout = styled.div`
  height: 100vh;
  width: 100%;
`;

export default function Root() {
  return (
    <AuthRouteLayout>
      <Outlet />
    </AuthRouteLayout>
  );
};