/* eslint-disable @typescript-eslint/naming-convention */
import { lazy } from 'react';

import { Nullable } from 'utils/types';
import { User } from 'contexts/UserContext/reducer';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const RecoverPassword = lazy(() => import('../../screens/RecoverPassword'));
const Registration = lazy(() => import('../../screens/Registration'));
// Add imports for screens above (FOR GENERATORS DO NOT REMOVE)

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

/* When adding routes, add them ABOVE the Home route
 * or it will redirect you to incorrect screens */
export const ROUTES = [
  {
    exact: false,
    path: PATHS.registration,
    component: Registration,
    title: 'Routes:registrationTitle',
    description: 'Routes:registrationDescription',
    redirectTo: (user: Nullable<User>) => (user ? MAIN_PRIVATE_PATH : undefined)
  },
  {
    exact: false,
    path: PATHS.recoverPassword,
    component: RecoverPassword,
    title: 'Routes:recoverPasswordTitle',
    description: 'Routes:recoverPasswordDescription',
    redirectTo: (user: Nullable<User>) => (user ? MAIN_PRIVATE_PATH : undefined)
  },
  {
    exact: false,
    path: PATHS.login,
    component: Login,
    title: 'Routes:loginTitle',
    description: 'Routes:loginDescription',
    redirectTo: (user: Nullable<User>) => (user ? MAIN_PRIVATE_PATH : undefined)
  },
  {
    exact: false,
    path: PATHS.home,
    component: Home,
    title: 'Routes:homeTitle',
    description: 'Routes:homeDescription',
    redirectTo: (user: Nullable<User>) => (user ? undefined : MAIN_PUBLIC_PATH)
  }
];
