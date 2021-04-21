import { withContextProvider } from 'contexts/UserContext';
import Routes from 'components/Routes';
import 'scss/application.scss';

function App() {
  return <Routes />;
}

export default withContextProvider(App);
