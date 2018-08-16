import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBar from '../src/app/components/SearchBar';
import TextArea from '../src/app/components/TextArea';
import Loading from '../src/app/components/Spinner/components/loading';

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
    <Loading className={styles.loading} id={1} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 1', () => (
  <div className={styles.container}>
    <Loading className={styles.loadingCircle} id={1} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 2', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={2} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 3', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={3} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 4', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={4} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 5', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={5} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 6', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={6} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 7', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={7} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 8', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={8} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 9', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={9} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 10', () => (
  <div className={styles.container}>
    <Loading className={styles.loading} id={10} color={colorSpinner} />
  </div>
));

storiesOf('Spinner', module).add('Id Loading 11', () => (
  <div className={styles.container}>
    <Loading className={styles.loadingCircle} id={11} color={colorSpinner} />
  </div>
));
