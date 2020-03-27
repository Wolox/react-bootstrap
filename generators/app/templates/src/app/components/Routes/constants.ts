import { lazy } from 'react';
import i18next from 'i18next';

import { Nullable } from '~utils/types';
import { User } from '~contexts/UserContext/reducer';

import PATHS from './paths';

const Home = lazy(() => import('../../screens/Dashboard'));
const Login = lazy(() => import('../../screens/Login'));
const RecoverPassword = lazy(() => import('../../screens/RecoverPassword'));
const Registration = lazy(() => import('../../screens/Registration'));

const MAIN_PUBLIC_PATH = PATHS.login;
const MAIN_PRIVATE_PATH = PATHS.home;

/* When adding routes, add them ABOVE the Home route
 * or it will redirect you to incorrect screens */
export const ROUTES = [
  {
    exact: false,
    path: PATHS.registration,
    component: Registration,
    title: i18next.t('Routes:registrationTitle'),
    description: i18next.t('Routes:registrationDescription')
  },
  {
    exact: false,
    path: PATHS.recoverPassword,
    component: RecoverPassword,
    title: i18next.t('Routes:recoverPasswordTitle'),
    description: i18next.t('Routes:recoverPasswordDescription')
  },
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
