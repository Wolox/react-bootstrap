import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar from '../src/app/components/SearchBar';
import TextArea from '../src/app/components/TextArea';
import Loading from '../src/app/components/Spinner/components/loading';
import Checkbox from '../src/app/components/Checkbox';
import RadioGroup from '../src/app/components/RadioGroup';

import styles from './styles.scss';

const colorSpinner = 'steelblue';

storiesOf('SearchBar', module).add('Default', () => (
  <SearchBar textButtonSearch="Search" className={styles.container} handleSubmit={action('clicked')}>
    <input name="input1" className={styles.input} />
    <input name="input2" className={styles.input} />
  </SearchBar>
));

storiesOf('TextArea', module).add('Default', () => (
  <div className={styles.container}>
    <TextArea onChange={action('changed')} />
  </div>
));

storiesOf('Spinner', module).add('Default', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="three-bounce" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading three-bounce', () => (
  <div className={styles.container}>
    <Loading className={styles.loadingCircle} type="three-bounce" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading circle', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="circle" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading double-bounce', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="double-bounce" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading ball-clip-rotate', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="ball-clip-rotate" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading wandering-cubes', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="wandering-cubes" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading chasing-dots', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="chasing-dots" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading cube-grid', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="cube-grid" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading wordpress', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="wordpress" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading folding-cube', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="folding-cube" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading ball-triangle-path', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} type="ball-triangle-path" color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Type Loading ball-pulse-sync', () => (
  <div className={styles.container}>
    <Loading className={styles.loadingCircle} type="ball-pulse-sync" color={colorSpinner} />
  </div>
));

storiesOf('Checkbox', module).add('Default', () => <Checkbox />);

storiesOf('Checkbox', module).add('With label', () => <Checkbox label="Acepto términos y condiciones" />);

storiesOf('Checkbox', module).add('With custom style', () => <Checkbox inputClassName={styles.checkmark} />);

storiesOf('Checkbox', module).add('With callback', () => <Checkbox onChange={action('clicked')} />);

storiesOf('RadioGroup', module).add('Default', () => (
  <RadioGroup>
    <RadioGroup.option label="option 1" value="1" />
    <RadioGroup.option label="option 2" value="2" />
    <RadioGroup.option label="option 3" value="3" />
  </RadioGroup>
));

storiesOf('RadioGroup', module).add('With custom styles', () => (
  <RadioGroup className={styles.radioGroup}>
    <RadioGroup.option
      label="option 1"
      value="1"
      className={styles.radioOption}
      inputClassName={styles.radio}
      labelClassName={styles.option1}
    />
    <RadioGroup.option
      label="option 2"
      value="2"
      className={styles.radioOption}
      inputClassName={styles.radio}
      labelClassName={styles.option2}
    />
    <RadioGroup.option
      label="option 3"
      value="3"
      className={styles.radioOption}
      inputClassName={styles.radio}
    />
  </RadioGroup>
));

storiesOf('RadioGroup', module).add('With different type children', () => (
  <RadioGroup>
    <RadioGroup.option label="option 1" value="1" />
    <hr />
    <RadioGroup.option label="option 2" value="2" />
    <hr />
    <RadioGroup.option label="option 3" value="3" />
  </RadioGroup>
));

storiesOf('RadioGroup', module).add('With callback', () => (
  <RadioGroup onChange={action('clicked')}>
    <RadioGroup.option label="option 1" value="1" />
    <RadioGroup.option label="option 2" value="2" />
    <RadioGroup.option label="option 3" value="3" />
  </RadioGroup>
));
