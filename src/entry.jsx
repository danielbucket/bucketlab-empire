import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './router.jsx';
import { GlobalStyle } from './globals/global.style.js';
import AuthProvider from './providers/authProvider.jsx';
import { AvatarProvider } from './providers/avatarProvider.jsx';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
};

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js', { scope: '/' })
//       .then(registration => {
//         console.log('Service Worker registered with scope:', registration.scope);
//       })
//       .catch(error => {
//         console.error('Service Worker registration failed:', error);
//       });
//   });
// }

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <AvatarProvider>
        <GlobalStyle />
        <Routes />
      </AvatarProvider>
    </AuthProvider>
  </StrictMode>
);