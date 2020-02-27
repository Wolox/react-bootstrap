import React from 'react';
import i18next from 'i18next';

import InputLabel from '/home/trocchi/Documents/frontend/test/login/src/app/components/InputLabel';

import Routes from '/home/trocchi/Documents/frontend/test/login/src/constants/routes';

import { FIELDS } from './constants';
import styles from './styles.module.scss';

interface Props {
  onEmailChange: (event: React.FormEvent<Element>) => void;
  onPasswordChange: (event: React.FormEvent<Element>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Registration({ onEmailChange, onPasswordChange, onSubmit }: Props) {
  return (
    <form className={`column center full-width m-top-8 ${styles.formContainer}`} onSubmit={onSubmit}>
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Registration:registration')}</h1>
        <h2>{i18next.t('Registration:registrationExplanation')}</h2>
      </div>
      <div className={`column m-bottom-2 ${styles.sectionContainer}`}>
        {//FIELDS.map(field => )}
}
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('Registration:enter')}
        </button>
        <a href={Routes.RECOVER_PASSWORD}>{i18next.t('Registration:forgotPassword')}</a>
      </div>
    </form>
  );
}

export default Registration;
