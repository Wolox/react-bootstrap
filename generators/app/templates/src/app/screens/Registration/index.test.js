import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

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

  describe('when mounting the application', () => {
    it('matches last snapshot', () => {
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
  });
});
