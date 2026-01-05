import { StyledCubicle } from './cubicle.styled';
import { Link } from 'react-router-dom';

export default function Cubicle({ account }) {
  const { first_name } = account;

  return (
    <StyledCubicle>
      <h1>Welcome, {first_name}. This is your Laboratory Cubicle.</h1>
      <div className="development-notes">
        <p>From here, you can manage your account and access features as they become available.</p>
        <p>Currently, you can update your profile. So much wow, right? I know.</p>
        <p>Basic features like uploading a profile picture, email verification, and sending/receiving messages are being developed.</p>
        <p>Security features are also in the pipeline, including two-factor authentication and account recovery options.</p>
        <p>Several Docker containers serve as the application gateway and multiple adjacent containers, each with their own ExpressJS instance serving their own API endpoints.</p>
        <p>A reverse proxy is used to route requests to the appropriate container.</p>
        <p>A Cloudflare Tunnel is utilized to connect the application server running from within the Docker Container on the Raspberry Pi5 to the internet.</p>
        <p>Web traffic is encrypted using HTTPS.</p>
        <div>
          <p>If things seem slow, keep in mind that this project is in active development. Read more about the BucketLab IO architecture <Link to="/laboratory/homelab">here</Link>.</p>
        </div>
      </div>
    </StyledCubicle>
  );
};