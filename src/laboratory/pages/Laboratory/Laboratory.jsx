import { LaboratoryStyle } from './laboratory.styled';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Cubicle from '../Cubicle/Cubicle';

export default function Laboratory() {
  const data = useLoaderData();
  const navigate = useNavigate();

  console.log('[LABORATORY] Loaded data:', data);

  useEffect(() => {
    // If no data, redirect to login after a brief delay
    if (!data) {
      console.log('[LABORATORY] No data, redirecting to login');
      const timer = setTimeout(() => {
        navigate('/portal/login', { replace: true });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [data, navigate]);

  // Show nothing while redirecting
  if (!data) {
    return null;
  }

  return (
    <LaboratoryStyle>
      <Cubicle account={data} />
    </LaboratoryStyle>
  );
};