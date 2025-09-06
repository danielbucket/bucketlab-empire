import { StyledCubicle } from './cubicle.styled';

export default function Cubicle({ account }) {
  const { first_name } = account;

  return (
    <StyledCubicle>
      <h1>Welcome, {first_name}, to your Laboratory Cubicle</h1>
      <div className="development-notes">
        <p>From here, you can manage your account and access all features.</p>
        <p>Currently, you can update your profile. So much wow, right? I know.</p>
        <p>Features like uploading a profile picture and sending and revieving messages are coming soon!</p>
        <p>If things seem slow, keep in mind that the API powering this is being actively developed.</p>
        <p>A single Docker container serving an application gateway and multiple adjacent containers, each with their own ExpressJS instance serving their own api endpoints.</p>
        <p>A reverse proxy is used to route requests to the appropriate container.</p>
        <p>Like a wormhole in outer space, a Cloudflare Tunnel is used to expose only the application server running inside the Docker Container on the Raspberry Pi5 to the internet.</p>
        <p>This bypasses the computers operating system, allowing for a more secure and direct connection.</p>
        <p>This tunnel is tied directly to the bucketlab.io domain and cannot be accessed from any other location.</p>
        <p>All traffic is encrypted using HTTPS.</p>
      </div>
    </StyledCubicle>
  );
};