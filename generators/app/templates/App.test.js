import React from 'react';
import { mount } from 'enzyme';

import App from './App';

describe('#App', () => {
  let component = null;

  beforeEach(() => {
    component = mount(<App />);
  });

  afterEach(() => {
    component.unmount();
  });

  describe('when mounting the application', () => {
    it('shows the Learn React text', () => {
      expect(component.find('a').props().children).toMatch(/Learn React/);
    });
  });
});
