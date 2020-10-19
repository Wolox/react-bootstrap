import React from 'react';
import { mount } from 'enzyme';

type Hook = () => any;

export const TestHook = ({ hook }: { hook: Hook }) => {
  hook();
  return null;
};

export const testHook = (hook: Hook) => {
  mount(<TestHook hook={hook} />);
};
