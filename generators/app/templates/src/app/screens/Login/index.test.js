import React from 'react';
import { mount } from 'enzyme';

import { RootComponent } from '~utils/tests';

import Login from './index';

describe('#Login', () => {
  let component = null;

  beforeEach(() => {
    component = mount(
      <RootComponent>
        <Login />
      </RootComponent>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('When the component is mounted', () => {
    it('matches last snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
