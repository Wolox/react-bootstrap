import { Routes } from 'react-router-dom';

import RouteItem from 'components/Routes/components/RouteItem';
import PATHS from 'components/Routes/paths';

import Home from './screens/Home';

function Dashboard() {
  return (
    <Routes>
      <RouteItem path={PATHS.home} element={<Home />} />
    </Routes>
  );
}

export default Dashboard;

