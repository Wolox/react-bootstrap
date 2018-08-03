import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar from '../src/app/components/SearchBar';
import TextArea from '../src/app/components/TextArea';

storiesOf('SearchBar', module).add('Default', () => (
  <SearchBar textButtonSearch="Search" handleSubmit={action('clicked')}>
    <input name="input1" />
    <input name="input2" />
  </SearchBar>
));

storiesOf('TextArea', module).add('Default', () => <TextArea onChange={action('changed')} />);
