import { useEffect, useState, useMemo } from "react";
import { AccountContext } from "../context/AccountContext.js";
import { jwtDecode } from "jwt-decode";

let ACCOUNT_URL = "https://api.bucketlab.io/auth/accounts/me";
if (import.meta.env.DEV) {
  ACCOUNT_URL = "https://dev.bucketlab.io/auth/accounts/me";
};

// JWT Token validation helper
const isValidJWT = (token) => {
  if (!token) return false;

  // Check if JWT is well-formed
  const parts = token.split('.');
  if (parts.length !== 3) return false;

  // Check if JWT is expired
  try {
    const payload = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return payload.exp && payload.exp > currentTime;
  } catch {
    return false;
  }
};


function AccountProvider({ children }) {
  const [accountData, setAccountData] = useState(null);
  const [token, setToken] = useState(() => {
    const sessionToken = localStorage.getItem('sessionToken');
    return isValidJWT(sessionToken) ? sessionToken : null;
  });

  useEffect(() => {
    const fetchAccountData = async () => {
      const response = await fetch(ACCOUNT_URL, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setAccountData(data);
      }
    };
    
    if (token && isValidJWT(token)) {
      fetchAccountData();
    }
  }, [token]);

  const accountContextValue = useMemo(() => ({ accountData }), [accountData]);
  
  return (
    <AccountContext.Provider value={accountContextValue}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;