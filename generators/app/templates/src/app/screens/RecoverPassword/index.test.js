import React from 'react';
import { mount } from 'enzyme';

import { RootComponent } from '~utils/tests';

import RecoverPassword from './index';

describe('#RecoverPassword', () => {
  let component = null;

  beforeEach(() => {
    component = mount(
      <RootComponent>
        <RecoverPassword />
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
