import React, { useCallback } from 'react';
import { TFunction } from 'i18next';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import FormInput from 'components/FormInput';
import PATHS from 'components/Routes/paths';
import { useDispatch } from 'contexts/UserContext';
import { useLazyRequest } from 'hooks/useRequest';
import { signup, setCurrentUser, RegistrationUser } from 'services/AuthServices';
import { actionCreators, User } from 'contexts/UserContext/reducer';

import styles from './styles.module.scss';

const PASSWORD_LENGTH = 8;

const FIELDS = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  password: 'password',
  confirmPassword: 'confirmPassword'
};

const getValidations = (t: TFunction) => {
  const requiredValidation = { required: t('requiredError') };
  return {
    firstName: requiredValidation,
    lastName: requiredValidation,
    email: {
      pattern: {
        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: t('emailFormatError') as string
      },
      ...requiredValidation
    },
    password: {
      ...requiredValidation,
      minLength: {
        value: 8,
        message: t('passwordLengthError', { amount: PASSWORD_LENGTH }) as string
      }
    },
    confirmPassword: requiredValidation
  };
};

function Registration() {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation('Registration');

  const [, , , signupRequest] = useLazyRequest({
    request: signup,
    withPostSuccess: response => {
      const userResponse = response as User;
      dispatch(actionCreators.setUser(userResponse));
      setCurrentUser(userResponse);

      history.push('/');
    }
  });

  const handleRegister = useCallback(
    (values: RegistrationUser) => {
      signupRequest(values);
    },
    [signupRequest]
  );

  const validateConfirmPassword = (value: string) =>
    value === watch('password') || (t('confirmPasswordError') as string);

  const validations = getValidations(t);

  return (
    <form
      className={`column center full-width ${styles.formContainer}`}
      aria-label="registration-form"
      onSubmit={handleSubmit(handleRegister)}
      noValidate
    >
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{t('registration')}</h1>
        <h2>{t('registrationExplanation')}</h2>
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1 m-right-2`}
          label={t('firstName')}
          name={FIELDS.firstName}
          inputType="text"
          inputClassName={styles.input}
          placeholder={t('firstNamePlaceholder') as string}
          inputRef={register(validations.firstName)}
          error={errors?.firstName?.message}
        />
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={t('lastName')}
          name={FIELDS.lastName}
          inputType="text"
          inputClassName={styles.input}
          placeholder={t('lastNamePlaceholder') as string}
          inputRef={register(validations.lastName)}
          error={errors?.lastName?.message}
        />
      </div>
      <div className={`row ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={t('email')}
          name={FIELDS.email}
          inputType="email"
          inputClassName={styles.input}
          placeholder={t('emailPlaceholder') as string}
          inputRef={register(validations.email)}
          error={errors?.email?.message}
        />
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1 m-right-2`}
          label={t('password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={styles.input}
          placeholder={t('passwordPlaceholder') as string}
          inputRef={register(validations.password)}
          error={errors?.password?.message}
        />
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={t('confirmPassword')}
          name={FIELDS.confirmPassword}
          inputType="password"
          inputClassName={styles.input}
          placeholder={t('confirmPasswordPlaceholder') as string}
          inputRef={register({ ...validations.confirmPassword, validate: validateConfirmPassword })}
          error={errors?.confirmPassword?.message}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {t('submit')}
        </button>
        <a href={PATHS.login}>{t('returnToLogin')}</a>
      </div>
    </form>
  );
}

export default Registration;
