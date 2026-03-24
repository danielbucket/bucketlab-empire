import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { jwtDecode } from "jwt-decode";
import { API_URLS } from '../global.urls.js';
const TOKEN_STORAGE_KEY = 'blabSessionToken';
const PROFILE_STORAGE_KEY = 'blabProfileData';

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
  const [token, setToken_] = useState(() => {
    const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    return isValidJWT(storedToken) ? storedToken : null;
  });
  const [profile, setProfile_] = useState(() => {
    const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    return storedProfile ? JSON.parse(storedProfile) : null;
  });

  const setProfileData = (data) => {
    if (data) {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(data));
      setProfile_(data);
    } else {
      console.warn('Attempted to set invalid profile data');
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      setProfile_(null);
    };
  };

  const setToken = (newToken) => {
    if (newToken && isValidJWT(newToken)) {
      localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
      setToken_(newToken);
    } else {
      console.warn('Attempted to set invalid JWT token');
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      setToken_(null);
    }
  };

  const clearAuthState = useCallback(() => {
    setToken_(null);
    setProfile_(null);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  }, []);

  const logoutRef = useRef(null);

  const logout = useCallback(async () => {
    // Notify server to invalidate token
    if (token) {
      try {
        await fetch(API_URLS.logout, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (error) {
        console.error('Logout API call failed:', error);
        // Continue with local logout even if API call fails
      }
    }
    
    clearAuthState();
  }, [token, clearAuthState]);

  // Keep logout ref stable for context
  useEffect(() => {
    logoutRef.current = logout;
  }, [logout]);

  // Separate effect for auto-logout logic
  useEffect(() => {
    if (!token || !isValidJWT(token)) {
      clearAuthState();
      return;
    }

    // Auto-logout when token expires
    try {
      const payload = jwtDecode(token);
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
  }, [token, clearAuthState]);

  const authContextValue = useMemo(() => ({
    token, 
    profile,
    setToken,
    setProfileData,
    logout: logoutRef.current,
    isAuthenticated: token && isValidJWT(token)
  }), [token, profile]);

  return (
    <AuthContext.Provider value={authContextValue}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;