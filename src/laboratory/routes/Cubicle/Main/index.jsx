import { StyledMain } from './index.styled';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <StyledMain>
       <div className='header'>
        <h2>You've made it this far!</h2>
        <p>Coming soon to a Cubicle near you...</p>
        <p>In the works is a communication utility that will bridge the gap between you the Cubicle Dweller and me, Bucket.</p>
        <p>Stay tuned for updates!</p>
      </div>
      <div className="development-update">
        <p>I'm currently learning my way around MongoDB. I thought I was going to relearn KnexJS, but it seems that Mongo / MongooseJS was to be the better choice.</p>
        <p>So, I'm learning MongoDB and MongooseJS. But the rabbit hole deepens; I'm also learning how to use, build, and deploy Ubuntu Server (on a raspberry PI5), Docker, and Cloudflare. </p>
        <p>The BucketLab api, server, and database are both isolated in a single Docker Container being served from Ubuntu Server on a Raspberry Pi5. In my home.</p>
        <p>This container is connected to the world wide web via Cloudflare (where BucketLab.io is hosted) using Cloudflared Tunnels.</p>
        <p>It's so much fun.</p>
      </div>
      <div className='footer'>
        <p>Remember, I can still be contacted via <Link to='https://www.linkedin.com/in/daniel-ludwick/'>LinkedIn</Link></p>
      </div>
      </StyledMain>
    </>
  );
};