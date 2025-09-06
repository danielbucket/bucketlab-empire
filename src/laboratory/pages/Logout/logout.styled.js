import { styled } from 'styled-components';
import { LuLogOut } from 'react-icons/lu';

// write a styled component for the logout button
// the button should use the LuLogOut icon from react-icons/lu
// the button should be positioned in the top right corner of the screen
// on hover, the button should expand to show the text "Logout"
// the button should have a tooltip that says "Logout"
// the button should have a smooth transition when hovering
// the button should have a pointer cursor on hover
// the button should have a background color change on hover
// the size of the icon should be small enogh to fit in the top right corner of a mobile device
// the button should be accessible
// the button should be responsive
// the button should be easy to click on mobile devices

export const LogoutButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  // background: #ff4b2b;
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(255, 75, 43, 0.6);
  
  &:hover {
    background: #ff416c;
    padding: 0.5rem 1rem;
    box-shadow: 0 0 16px rgba(255, 65, 108, 0.8);
    
    span {
      display: inline;
    }
  }

  span {
    display: none;
    color: white;
    font-weight: bold;
    font-size: 1rem;
  }

  &:focus {
    outline: 2px solid #ff416c;
    outline-offset: 2px;
  }
`;

export const LogoutIcon = styled(LuLogOut)`
  pointer-events: none;
`;