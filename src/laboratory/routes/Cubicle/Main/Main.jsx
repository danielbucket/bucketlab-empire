import { StyledMain } from './index.styled';
import { Link } from 'react-router-dom';

export default function Main({ passportData }) {
  const { passport } = passportData;

  return (
    <StyledMain>
      {passport && (
        <div className='traveler-info'>
          <img src={passport.image} alt={passport.first_name} />
          <div className='details'>
            <h3>Traveler Details</h3>
            <p><strong>First Name:</strong> {passport.first_name}</p>
            <p><strong>Last Name:</strong> {passport.last_name}</p>
            <p><strong>Email:</strong> {passport.email}</p>
            <p><strong>Destination:</strong> {passport.destination}</p>
            <p><strong>Passport Number:</strong> {passport.passport_number}</p>
          </div>
          <div className='header'>
            <h2>You've made it this far, <span>{passport.first_name}</span>!</h2>
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