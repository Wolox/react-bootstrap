import { render } from '@testing-library/react';

import App from '.';

describe('App component', () => {
  test('Renders without errors', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
