import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './index';

describe('#TextArea', () => {
  let component = null;
  const testText = 'This is a test text';
  // eslint-disable-next-line no-empty-function, @typescript-eslint/no-empty-function
  const onChange = jest.fn();
  const onBlur = jest.fn();
  const onFocus = jest.fn();
  const className = 'some-class-name';
  const name = 'myTextArea';

  beforeEach(() => {
    // eslint-disable-next-line react/jsx-no-bind
    component = shallow(
      <TextArea
        value={testText}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={className}
        name={name}
      />
    );
  });

  describe('when mounting', () => {
    it('has the value passed as prop', () => {
      expect(component.props().value).toEqual(testText);
    });

    it('has the name passed as prop', () => {
      expect(component.props().name).toEqual(name);
    });

    it('has the same testid as its name', () => {
      expect(component.props()['data-testid']).toEqual(name);
    });
  });

  describe('when a the change event is triggered', () => {
    it('contains the new value', () => {
      component.props().onChange();
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('when a the blur event is triggered', () => {
    it('calls the blur function passed as prop', () => {
      component.props().onBlur();
      expect(onBlur).toHaveBeenCalled();
    });
  });

  describe('when a the focus event is triggered', () => {
    it('calls the focus function passed as prop', () => {
      component.props().onFocus();
      expect(onFocus).toHaveBeenCalled();
    });
  });

  describe('when a className is passed as prop', () => {
    it('contains the class passed as prop', () => {
      expect(component.hasClass(className)).toBeTruthy();
    });
  });
});
