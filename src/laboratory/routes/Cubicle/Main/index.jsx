import { useState } from 'react';
import { StyledMain } from './index.styled';
import { Link } from 'react-router-dom';

export default function Main({ data }) {
  console.log('Traveler data:', data);

  const [error, setError] = useState(null);
  const [traveler, setTraveler] = useState(data);


  return (
    <StyledMain>
      {data && (
        <div className='traveler-info'>

          <img src={data.image} alt={data.first_name} />
          <div className='details'>
            <h3>Traveler Details</h3>
            <p><strong>First Name:</strong> {data.first_name}</p>
            <p><strong>Last Name:</strong> {data.last_name}</p>
            <p><strong>Email:</strong> {data.email}</p>
          </div>
          
          <div className='header'>
            <h2>You've made it this far, <span>{data.first_name}</span>!</h2>
            <p>Coming soon to a Cubicle near you...</p>
            <p>In the works is a communication utility that will bridge the gap between you, the Traveler, and the BucketLab Empire.</p>
            <p>Stay tuned for updates!</p>
          </div>

          <div className='footer'>
            <p>Remember, I can still be contacted via <Link to='https://www.linkedin.com/in/daniel-ludwick/'>LinkedIn</Link></p>
          </div>
        </div>
      )}
    </StyledMain>
  );
};