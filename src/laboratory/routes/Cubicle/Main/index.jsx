import { StyledMain } from './index.styled';
import { Link } from 'react-router-dom';

export default function Main({ travelerData }) {
  const { traveler } = travelerData;

  return (
    <StyledMain>
      {traveler && (
        <div className='traveler-info'>
          <img src={traveler.image} alt={traveler.first_name} />
          <div className='details'>
            <h3>Traveler Details</h3>
            <p><strong>First Name:</strong> {traveler.first_name}</p>
            <p><strong>Last Name:</strong> {traveler.last_name}</p>
            <p><strong>Email:</strong> {traveler.email}</p>
          </div>
          <div className='header'>
            <h2>You've made it this far, <span>{traveler.first_name}</span>!</h2>
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