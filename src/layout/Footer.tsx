import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {currentYear} Bookscape</p>
      <Link to="#">{'Feedback'}</Link>
      <Link to="#">{'Privacy Policy'}</Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto auto;
  justify-items: start;
  align-items: center;
  gap: 1rem;
  height: 86px;
`;

export default Footer;
