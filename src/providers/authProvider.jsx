import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
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
    if (token && isValidJWT(token)) {
      localStorage.setItem(AUTH_STORAGE_KEY, token);
      setAuth_(token);
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      setAuth_(null);
    }
  }, [AUTH_STORAGE_KEY]);

  const clearAuthState = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuth_(null);
  }, [AUTH_STORAGE_KEY]);

  const logoutRef = useRef(null);

  const logout = useCallback(async () => {
    if (auth) {
      try {
        await fetch(API_URLS.logout, {
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
  }, [auth, clearAuthState]);

  // Keep logout ref stable for context
  useEffect(() => {
    logoutRef.current = logout;
  }, [logout]);

  // Auto-logout when token expires
  useEffect(() => {
    if (!auth || !isValidJWT(auth)) {
      clearAuthState();
      return;
    }

    // Auto-logout when token expires
    try {
      const payload = jwtDecode(auth);
      const timeUntilExpiry = (payload.exp * 1000) - Date.now();
      
      if (timeUntilExpiry > 0) {
        const timeoutId = setTimeout(clearAuthState, timeUntilExpiry);
        return () => clearTimeout(timeoutId);
      } else {
        clearAuthState();
      }
    } catch {
      clearAuthState();
    }
  }, [auth, clearAuthState]);

  const authContextValue = useMemo(() => ({
    auth, 
    setAuth,
    logout: logoutRef.current,
    isAuthenticated: auth && isValidJWT(auth)
  }), [auth, setAuth]);
  return (
    <AuthContext.Provider value={authContextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;