import { RootLayout } from './index.styled.js';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};