import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './router.jsx';
import { GlobalStyle } from './global.style.js';
import AuthProvider from './providers/authProvider.jsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
};

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <Routes />
    </AuthProvider>
  </StrictMode>
);