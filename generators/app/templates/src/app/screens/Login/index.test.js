import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Login from './index';

describe('#Login', () => {
  let component = null;

  beforeEach(() => {
    component = mount(<Login />);
  });

  afterEach(() => {
    component.unmount();
  });

  describe('when mounting the application', () => {
    it('matches last snapshot', () => {
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
  });
});
