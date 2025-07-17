import { RootLayout } from './index.styled.js';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <RootLayout>
      <h1>Welcome to the Portal</h1>
      <p>This is the main portal area where you can access various features.</p>
      <Outlet />
    </RootLayout>
  );
};