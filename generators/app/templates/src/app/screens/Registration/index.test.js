import React from 'react';
import { mount } from 'enzyme';

import { RootComponent } from '~utils/tests';

import Registration from './index';

describe('#Registration', () => {
  let component = null;

  beforeEach(() => {
    component = mount(
      <RootComponent>
        <Registration />
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
