// import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../context/AuthContext.js';

// JWT Token validation helper
const isValidJWT = (token) => {
  if (!token) return false;
  
  try {
    // Basic JWT structure validation (header.payload.signature)
    const parts = token.split('.');
    if (parts.length !== 3) return false;
    
    // Decode payload to check expiration
    const payload = JSON.parse(atob(parts[1]));
    const currentTime = Date.now() / 1000;
    
    // Check if token is expired
    if (payload.exp && payload.exp < currentTime) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.warn('Invalid JWT token format:', error);
    return false;
  }
};

function AuthProvider({ children }) {
  const [token, setToken_] = useState(() => {
    const storedToken = localStorage.getItem('bucketlab-token');
    return isValidJWT(storedToken) ? storedToken : null;
  });
  const [user, setUser] = useState(() => {
    // Try to restore user data from localStorage
    const storedUser = localStorage.getItem('bucketlab-user');
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      localStorage.removeItem('bucketlab-user');
      return null;
    }
  });

  const setToken = (newToken) => {
    if (newToken && isValidJWT(newToken)) {
      setToken_(newToken);
    } else {
      console.warn('Attempted to set invalid JWT token');
      setToken_(null);
    }
  };

  const setUserData = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem('bucketlab-user', JSON.stringify(userData));
    } else {
      localStorage.removeItem('bucketlab-user');
    }
  };

  const logout = () => {
    setToken_(null);
    setUser(null);
    localStorage.removeItem('bucketlab-token');
    localStorage.removeItem('bucketlab-user');
  };

  useEffect(() => {
    if (token && isValidJWT(token)) {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('bucketlab-token', token);
    } else {
      // delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('bucketlab-token');
      if (token) {
        // Invalid token was provided, clear it
        setToken_(null);
      }
    }
  }, [token]);

  // Auto-logout when token expires
  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp) {
          const timeUntilExpiry = (payload.exp * 1000) - Date.now();
          if (timeUntilExpiry > 0) {
            const timeoutId = setTimeout(() => {
              console.log('Token expired, logging out...');
              logout();
            }, timeUntilExpiry);
            
            return () => clearTimeout(timeoutId);
          }
        }
      } catch (error) {
        console.warn('Error parsing token expiration:', error);
      }
    }
  }, [token]);

  const authContextValue = useMemo(() => ({
    token, 
    user,
    setToken, 
    setUserData,
    logout,
    isAuthenticated: !!token && isValidJWT(token)
  }), [token, user]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;