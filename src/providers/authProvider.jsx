// import axios from 'axios';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [token, setToken_] = useState(localStorage.getItem('test-token'));

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('test-token', token);
    } else {
      // delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('test-token');
    }
  }, [token]);

  const authContextValue = useMemo(() => ({
    token, setToken
  }), [token]);


  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;