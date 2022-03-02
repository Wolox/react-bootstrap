import { BrowserRouter as Router, Routes as RoutesSwitch, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'contexts/UserContext';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import styles from './styles.module.scss';
import Dashboard from "screens/Dashboard";

function Routes() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      <div className={styles.container}>
        <Suspense>
        <RoutesSwitch>
        <Route path="/" element={<Dashboard />}>
            {ROUTES.map(({ redirectTo, path, element, ...config }) => (
              <Route
                key={path}
                path={path}
                element={redirectTo?.(user) ? <Navigate to={redirectTo?.(user) as any} /> : element}
                {...config}
              />
            ))}
       </Route>  
          </RoutesSwitch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
