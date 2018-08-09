import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar from '../src/app/components/SearchBar';
import TextArea from '../src/app/components/TextArea';
import Loading from '../src/app/components/Spinner/components/loading';

const styleContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px'
};

storiesOf('SearchBar', module).add('Default', () => (
  <SearchBar textButtonSearch="Search" handleSubmit={action('clicked')}>
    <input name="input1" />
    <input name="input2" />
  </SearchBar>
));

storiesOf('TextArea', module).add('Default', () => <TextArea onChange={action('changed')} />);

storiesOf('Spinner', module).add('Id Loading 1', () => (
  <div style={styleContainer}>
    <Loading id={1} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 2', () => (
  <div style={styleContainer}>
    <Loading id={2} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 3', () => (
  <div style={styleContainer}>
    <Loading id={3} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 4', () => (
  <div style={styleContainer}>
    <Loading id={4} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 5', () => (
  <div style={styleContainer}>
    <Loading id={5} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 6', () => (
  <div style={styleContainer}>
    <Loading id={6} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 7', () => (
  <div style={styleContainer}>
    <Loading id={7} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 8', () => (
  <div style={styleContainer}>
    <Loading id={8} />
  </div>
));
