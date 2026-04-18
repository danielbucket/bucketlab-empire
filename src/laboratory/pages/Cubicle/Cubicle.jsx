import React, { useState, useEffect } from 'react';
import { StyledCubicle } from './cubicle.styled';
import { Link } from 'react-router-dom';
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
      <Permissions permissionsList={permissionsList} />
      <h1>Welcome, {first_name}. This is your Laboratory Cubicle.</h1>
      <div className="development-notes">
        <p>This is a work in progress. Here you will find various projects, experiments, and tools that I am currently working on. Feel free to explore and check back often for updates!</p>
        <p>In the meantime, you can check out my <Link to="/laboratory/resume">Resume</Link> or visit the <Link to="/public/home">Public Home Page</Link>.</p>
      </div>
    </StyledCubicle>
  );
}