import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { jwtDecode } from "jwt-decode";
import { API_URLS } from '../global.urls.js';
import { constants } from '../global.constants.js';

const AUTH_STORAGE_KEY = constants.AUTH_STORAGE_KEY;

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
  const [auth, setAuth_] = useState(() => {
    // auth = token string
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedAuth) return null;

    try {
      // Token is stored as plain string, not JSON
      return isValidJWT(storedAuth) ? storedAuth : null;
    } catch {
      return null;
    }
  });

  const setAuth = (token) => {
    if (token && isValidJWT(token)) {
      localStorage.setItem(AUTH_STORAGE_KEY, token);
      setAuth_(token);
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      setAuth_(null);
    }
  };

  const clearAuthState = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setAuth_(null);
  }, []);

  const logoutRef = useRef(null);

  const logout = useCallback(async () => {
    // Notify server to invalidate token
    if (auth) {
      try {
        await fetch(API_URLS.logout, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth}`
          }
        });
      } catch (error) {
        console.error('Logout API call failed:', error);
      }
    }
    
    clearAuthState();
  }, [auth, clearAuthState]);

  // Keep logout ref stable for context
  useEffect(() => {
    logoutRef.current = logout;
  }, [logout]);

  // Separate effect for auto-logout logic
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
  }), [auth]);
  return (
    <AuthContext.Provider value={authContextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;