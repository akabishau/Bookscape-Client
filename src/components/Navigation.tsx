import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function Navigation() {
  return (
    <nav>
      <Link to={ROUTES.HOME_ROUTE}>{'Home'}</Link>
      <Link to={ROUTES.SEARCH_ROUTE}>{'Search'}</Link>
    </nav>
  );
}
export default Navigation;
