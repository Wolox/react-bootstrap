import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchBar from './index';

describe('#SearchBar', () => {
  let component = null;
  const handleSubmit = jest.fn();

  beforeEach(() => {
    component = mount(
      <SearchBar submitButtonContent="Search" onSubmit={handleSubmit}>
        <input />
      </SearchBar>
    );
  });

  afterEach(() => {
    component.unmount();
  });

  describe('when mounting', () => {
    it('matches last snapshot', () => {
      expect(renderer.create(component).toJSON()).toMatchSnapshot();
    });
  });

  describe('when pressing the submit button', () => {
    beforeEach(() => {
      const button = component.find('[data-testid="search-bar-submit-button"]');
      button.simulate('submit');
    });

    it('calls the submit function', () => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
