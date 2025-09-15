import styled from 'styled-components';

export const ProfileBaseStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #e3f0ff 0%, #f7f7f7 100%);
  background-image: url(${props => props.$pageImage || ''});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 100;
  }

  main {
    flex: 1 1 auto;
    width: 100%;
    margin-top: 4.5rem; /* adjust for header height */
    margin-bottom: 4.5rem; /* adjust for footer height */
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 0;
  }
`;
