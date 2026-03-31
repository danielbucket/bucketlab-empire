import { useEffect, useMemo, useState, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { jwtDecode } from "jwt-decode";
import { API_URLS } from '../global.urls.js';
import { constants } from '../global.constants.js';

// JWT Token validation helper
// Returns true or false
const isValidJWT = (token) => {
  if (!token) return false;

  // Check if JWT is well-formed
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  try {
    const payload = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return payload.exp && payload.exp > currentTime;
  } catch {
    return false;
  }
};

function AuthProvider({ children }) {
  const { AUTH_STORAGE_KEY } = constants;
  const [auth, setAuth_] = useState(() => {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedAuth) return null;

    try {
      return isValidJWT(storedAuth) ? storedAuth : null;
    } catch {
      return null;
    }
  });

  const setAuth = useCallback((token) => {
    console.log('setAuth called with token:', token ? token.substring(0, 30) : null);
    if (token && isValidJWT(token)) {
      console.log('setAuth: Token valid, storing');
      localStorage.setItem(AUTH_STORAGE_KEY, token);
      setAuth_(token);
    } else {
      console.log('setAuth: Token invalid, clearing. isValidJWT=', token ? isValidJWT(token) : 'no token');
      localStorage.removeItem(AUTH_STORAGE_KEY);
      setAuth_(null);
    }
  }, [AUTH_STORAGE_KEY]);

  const clearAuthState = useCallback(() => {
    console.log('CLEARING AUTH - Stack:', new Error().stack.split('\n').slice(0, 5).join('\n'));
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuth_(null);
  }, [AUTH_STORAGE_KEY]);

  const clearAuthAndProfile = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(constants.PROFILE_STORAGE_KEY);
    setAuth_(null);
  }, [AUTH_STORAGE_KEY]);

  const logout = useCallback(async () => {
    if (auth) {
      try {
        await fetch(API_URLS.profiles.logout, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`
          }
        });
      } catch {
        // Silently handle logout API errors
      }
    }
    
    clearAuthState();
    return;
  }, [auth, clearAuthState]);

  // Auto-logout when token expires
  useEffect(() => {
    console.log('Auto-logout effect running, auth:', auth ? auth.substring(0, 30) : null);
    
    // Only run if we have auth
    if (!auth) {
      console.log('Auto-logout effect: No auth, skipping');
      return;
    }
    
    const isValid = isValidJWT(auth);
    console.log('Auto-logout effect: isValidJWT =', isValid);
    if (!isValid) {
      console.log('Auto-logout effect: Token not valid, clearing');
      clearAuthState();
      return;
    }

    // Auto-logout when token expires
    try {
      const payload = jwtDecode(auth);
      const timeUntilExpiry = (payload.exp * 1000) - Date.now();
      console.log('Auto-logout effect: Time until expiry:', timeUntilExpiry);
      
      if (timeUntilExpiry > 0) {
        const timeoutId = setTimeout(clearAuthState, timeUntilExpiry);
        return () => clearTimeout(timeoutId);
      } else {
        console.log('Auto-logout effect: Token already expired');
        clearAuthState();
      }
    } catch (e) {
      console.log('Auto-logout effect: Error:', e.message);
      clearAuthState();
    }
  }, [auth, clearAuthState]);

  const authContextValue = useMemo(() => ({
    auth, 
    setAuth,
    logout,
    clearAuthAndProfile,
    isAuthenticated: auth && isValidJWT(auth)
  }), [auth, setAuth, logout, clearAuthAndProfile]);
  return (
    <AuthContext.Provider value={authContextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;