import { StyledCubicle } from './cubicle.styled';
import { Link } from 'react-router-dom';
import { useProfile } from '../../../hooks/useProfile.js';

  
export default function Cubicle() {
  const { profile } = useProfile();
  const { first_name } = profile || { first_name: 'Scott Farcus' };

  return (
    <StyledCubicle>
      <h1>Welcome, {first_name}. This is your Laboratory Cubicle.</h1>
      <div className="development-notes">
        <p>From here, you can manage your account and access features as they become available.</p>
        <p>Currently, you can update your profile. So much wow, right? I know.</p>
        <p>Basic features like uploading a profile picture, email verification, and sending/receiving messages are being developed.</p>
        <p>Several Docker containers serve as the application gateway, and multiple adjacent supporting containers, each with their own ExpressJS instance provide the services needed for the app.</p>
        <p>If things seem slow, keep in mind that this project is in active development. Read more about the BucketLab IO architecture <Link to="/laboratory/homelab">here</Link>.</p>
      </div>
    </StyledCubicle>
  );
};