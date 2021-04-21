import { ComponentType } from 'react';
import { Route, Redirect, RouteComponentProps, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  redirectTo?: string;
}

function RouteItem({ redirectTo, ...config }: Props) {
  return redirectTo ? <Redirect to={redirectTo} /> : <Route {...config} />;
}

export default RouteItem;
