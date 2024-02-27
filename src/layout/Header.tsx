import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-items: center;
  align-items: center;
`;

export default Header;
