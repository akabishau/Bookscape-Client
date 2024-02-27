import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Navigation() {
  return (
    <Nav>
      <Link to={ROUTES.SEARCH_ROUTE}>{'Search'}</Link>
      <Link to="#">{'Menu'}</Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;
`;

export default Navigation;
