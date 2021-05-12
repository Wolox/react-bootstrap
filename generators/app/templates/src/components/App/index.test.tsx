import { render, screen } from '@testing-library/react';

import App from '.';

jest.mock(
  'components/Routes',
  () =>
    function Routes() {
      return <span>Routes</span>;
    }
);

describe('App component', () => {
  test('Renders without errors', () => {
    render(<App />);
    expect(screen.getByText('Routes')).toBeInTheDocument();
  });
});
