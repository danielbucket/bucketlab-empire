// import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { jwtDecode } from "jwt-decode";

// JWT Token validation helper
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
    const storedToken = localStorage.getItem('sessionToken');
    return isValidJWT(storedToken) ? storedToken : null;
  });

  const [user, setUser] = useState(() => {
    // Try to restore user data from localStorage
    const storedUser = localStorage.getItem('accountData');
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      localStorage.removeItem('accountData');
      return null;
    }
  });

  const setToken = (newToken) => {
    if (newToken && isValidJWT(newToken)) {
      localStorage.setItem('sessionToken', newToken);
      setToken_(newToken);
    } else {
      console.warn('Attempted to set invalid JWT token');
      localStorage.removeItem('sessionToken');
      setToken_(null);
    }
  };

  const setUserData = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('accountData', JSON.stringify(userData));
    } else {
      localStorage.removeItem('accountData');
    }
  };

  const logout = () => {
    setToken_(null);
    setUser(null);
    localStorage.removeItem('sessionToken');
    localStorage.removeItem('accountData');
  };

  useEffect(() => {
    if (token && isValidJWT(token)) {
      localStorage.setItem('sessionToken', token);
      // Auto-logout when token expires
      try {
        const payload = jwtDecode(token);
        if (payload.exp) {
          const timeUntilExpiry = (payload.exp * 1000) - Date.now();
          if (timeUntilExpiry > 0) {
            const timeoutId = setTimeout(logout, timeUntilExpiry);
            return () => clearTimeout(timeoutId);
          } else {
            logout();
          }
        }
      } catch {
        // If decoding fails, logout for safety
        logout();
      }
    } else {
      localStorage.removeItem('sessionToken');
      if (token) setToken_(null);
    }
  }, [token]);

  const authContextValue = useMemo(() => ({
    token, 
    user,
    setToken, 
    setUserData,
    logout,
    isAuthenticated: token && isValidJWT(token)
  }), [token, user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;