/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';
import { User } from 'contexts/UserContext/reducer';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));

const MAIN_PUBLIC_PATH = PATHS.login;
// const MAIN_PRIVATE_PATH = PATHS.home;

/* When adding routes, add them ABOVE the Home route
 * or it will redirect you to incorrect screens */
export const ROUTES = [
  // Leaving this as an example for then the Login screen exists
  // {
  //   exact: false,
  //   path: PATHS.login,
  //   component: Login,
  //   title: 'Routes:loginTitle',
  //   description: 'Routes:loginDescription',
  //   redirectTo: (user: User | null) => (user ? MAIN_PRIVATE_PATH : undefined)
  // },
  {
    exact: false,
    path: PATHS.home,
    component: Home,
    title: 'Routes:homeTitle',
    description: 'Routes:homeDescription',
    redirectTo: (user: User | null) => (user ? undefined : MAIN_PUBLIC_PATH)
  }
];
