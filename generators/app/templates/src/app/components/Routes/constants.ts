import { lazy } from 'react';
import i18next from 'i18next';

import { Nullable } from '~utils/types';
import { User } from '~contexts/UserContext/reducer';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

export const ROUTES = [
  {
    exact: false,
    path: PATHS.login,
    component: Login,
    title: i18next.t('Routes:loginTitle'),
    description: i18next.t('Routes:loginDescription'),
    redirectTo: (user: Nullable<User>) => (user ? MAIN_PRIVATE_PATH : undefined)
  },
  {
    exact: false,
    path: PATHS.home,
    component: Home,
    title: i18next.t('Routes:homeTitle'),
    description: i18next.t('Routes:homeDescription'),
    redirectTo: (user: Nullable<User>) => (user ? undefined : MAIN_PUBLIC_PATH)
  }
];
