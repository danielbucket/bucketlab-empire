import { useEffect, useMemo, useState, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { jwtDecode } from "jwt-decode";
import { API_URLS } from '../globals/global.urls.js';
import { AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY } from '../globals/global.constants.js';

const isValidJWT = (token) => {
  if (!token) return false;

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
  const [authToken, setAuthToken_] = useState(() => {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!storedAuth) return null;

    try {
      return isValidJWT(storedAuth) ? storedAuth : null;
    } catch {
      return null;
    }
  });

  const setAuth = useCallback((token) => {
    if (token) {
      localStorage.setItem(AUTH_STORAGE_KEY, token);
      setAuthToken_(token);
    } else {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      setAuthToken_(null);
    }
  }, [AUTH_STORAGE_KEY]);

  const clearLocalStorage = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(PROFILE_STORAGE_KEY);
    setAuthToken_(null);
  }, [AUTH_STORAGE_KEY, PROFILE_STORAGE_KEY]);

  const getAuth = useCallback(async (email, password) => {
    try {
      const response = await fetch(API_URLS.auth.login, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      if (data.status === 'success') {
        if (isValidJWT(data.token)) {
          setAuth(data.token);
        } else {
          throw new Error('Received an invalid token from the server');
        }
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('AuthProvider: Login error:', error);
      throw error;
    }
  }, [setAuth]);

  const logout = useCallback(async () => {
    if (authToken) {
      try {
        await fetch(API_URLS.profiles.logout, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
      } catch {
        // Silently handle logout API errors
      }
    }
    
    clearLocalStorage();
    return;
  }, [authToken, clearLocalStorage]);


  // Auto-logout when token expires
  useEffect(() => {
    if (!authToken) { return }
    
    const isValid = isValidJWT(authToken);

    if (!isValid) {
      clearLocalStorage();
      return;
    }

    try {
      const payload = jwtDecode(authToken);
      const timeUntilExpiry = (payload.exp * 1000) - Date.now();
      
      if (timeUntilExpiry > 0) {
        const timeoutId = setTimeout(clearLocalStorage, timeUntilExpiry);
        return () => clearTimeout(timeoutId);
      } else {
        clearLocalStorage();
      }
    } catch {
      clearLocalStorage();
    }
  }, [authToken, clearLocalStorage]);

  const authContextValue = useMemo(() => ({
    authToken, 
    getAuth,
    logout,
    clearLocalStorage,
    isAuthenticated: authToken && isValidJWT(authToken)
  }), [authToken, getAuth, logout, clearLocalStorage]);
  return (
    <AuthContext.Provider value={authContextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;