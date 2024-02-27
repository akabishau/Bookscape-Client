import { Routes, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Home from '../pages/Home';
import Search from '../pages/Search';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME_ROUTE} element={<Home />} />
      <Route path={ROUTES.SEARCH_ROUTE} element={<Search />} />
    </Routes>
  );
}

export default App;
