import React, { useState, useEffect } from 'react';
import { StyledCubicle, CubicleNav } from './cubicle.styled.js';
import { jwtDecode } from 'jwt-decode';
import { useProfile } from '../../../hooks/useProfile.js';
import { useAuth } from '../../../hooks/useAuth.js';
import Permissions from './components/Permissions/Permissions.jsx';

export default function Cubicle() {
  const { profile } = useProfile();
  const { authToken } = useAuth();
  
  const [permissionsList, setPermissionsList] = useState(() => {
    if (!authToken) return [];
    try {
      const decoded = jwtDecode(authToken);
      return decoded.permissions || [];
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return [];
    }
  });

  useEffect(() => {
    if (!authToken) {
      setPermissionsList([]);
      return;
    }
    try {
      const decoded = jwtDecode(authToken);
      setPermissionsList(decoded.permissions || []);
    } catch (error) {
      console.error('Error decoding JWT:', error);
      setPermissionsList([]);
    }
  }, [authToken]);
  
  const { first_name } = profile || { first_name: 'Scott Farcus' };

  return (
    <StyledCubicle>
      <h1>Welcome, {first_name}.</h1>
      <CubicleNav>
        <Permissions permissionsList={permissionsList} />
      </CubicleNav>
      <div className="development-notes">
        <p>This web app, the BucketLab Empire, is a work in progress, so watch your head. <br /> Here you will find various projects, experiments, and tools that I am currently working on. Feel free to explore and check back often for updates!</p>
      </div>
    </StyledCubicle>
  );
}