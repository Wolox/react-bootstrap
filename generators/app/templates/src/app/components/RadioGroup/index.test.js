import React from 'react';
import { mount } from 'enzyme';

import RadioOption from './components/RadioOption';

import RadioGroup from './index';

describe('#RadioGroup', () => {
  let selectedOption = null;
  let component = null;
  const onChange = event => (selectedOption = event.target.value);
  const getInput = (comp, id) => comp.find(`[data-testid="radioButton-${id}"]`);

  beforeEach(() => {
    selectedOption = 'option2';
  });

  describe('when the group is disabled', () => {
    beforeEach(() => {
      component = mount(
        <RadioGroup onChange={onChange} initialValue={selectedOption} name="radioButton" disabled>
          <RadioOption id="option1" label="Option 1" />
          <RadioOption id="option2" label="Option 2" />
        </RadioGroup>
      );
    });

    it('all the inputs are disabled', () => {
      const selectedInput1 = getInput(component, 'option1');
      const selectedInput2 = getInput(component, 'option2');
      expect(selectedInput1.props().disabled).toBeTruthy();
      expect(selectedInput2.props().disabled).toBeTruthy();
    });

    it('matches last snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when an option is selected', () => {
    beforeEach(() => {
      component = mount(
        <RadioGroup onChange={onChange} initialValue={selectedOption} name="radioButton" disabled={false}>
          <RadioOption id="option1" label="Option 1" />
          <RadioOption id="option2" label="Option 2" />
        </RadioGroup>
      );
    });

    it('provides the selected value to the onChange callback', () => {
      const selectedInput = getInput(component, 'option1');
      selectedInput.simulate('change', { target: { value: 'option1' } });
      expect(selectedOption).toEqual('option1');
    });

    it('matches last snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
