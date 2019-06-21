import React from 'react';
import { shallow, mount } from 'enzyme';

import TextArea from '.';

const testText = 'This is a test text';
const testFunc = () => {}; // eslint-disable-line no-empty-function

describe('<TextArea />', () => {
  it('should contain <textArea />', () => {
    const component = shallow(<TextArea value={testText} onChange={testFunc} />);
    expect(component.containsMatchingElement(<textarea />)).toBeTruthy();
  });
  it('should have the test text', () => {
    const component = mount(<TextArea value={testText} onChange={testFunc} />);
    expect(component.text()).toEqual(testText);
  });
  it('should have the required props', () => {
    const requiredProps = ['value', 'onChange'];
    const component = shallow(<TextArea value={testText} onChange={testFunc} />);
    requiredProps.forEach(prop => {
      expect(component.prop(prop)).not.toBe(undefined);
    });
  });
});
