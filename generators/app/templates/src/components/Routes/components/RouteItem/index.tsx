import { Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  element: React.ReactNode;
  redirectTo?: string;
}

function RouteItem({ ...config }: Props) {
  return  <Route {...config} />;
}

export default RouteItem;
