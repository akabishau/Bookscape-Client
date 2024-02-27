import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../constants/routes';
import logo from '../assets/logo.svg';

function Logo() {
  return (
    <Link to={HOME_ROUTE}>
      <Image src={logo} alt="logo" />
    </Link>
  );
}

const Image = styled.img`
  height: 32px;
`;

export default Logo;
