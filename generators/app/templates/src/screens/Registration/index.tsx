import React, { useCallback } from 'react';
import i18next from 'i18next';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';

import FormInput from 'components/FormInput';
import PATHS from 'components/Routes/paths';
import { useDispatch } from 'contexts/UserContext';
import { useLazyRequest } from 'hooks/useRequest';
import { signup, setCurrentUser, RegistrationUser } from 'services/AuthServices';
import { actionCreators, User } from 'contexts/UserContext/reducer';

import styles from './styles.module.scss';

const PASSWORD_LENGTH = 8;

const FIELDS = {firstName: 'firstName', lastName: 'lastName', email: 'email', password: 'password', confirmPassword: 'confirmPassword'};

const requiredValidation = { required: i18next.t('Registration:requiredError') as string };

const VALIDATIONS = {
  firstName: requiredValidation,
  lastName: requiredValidation,
  email: {
    pattern: {
      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: i18next.t('Registration:emailFormatError') as string
    },
    ...requiredValidation
  },
  password: {
    ...requiredValidation,
    minLength: {
      value: 8,
      message: i18next.t('Registration:passwordLengthError', { amount: PASSWORD_LENGTH }) as string
    }
  },
  confirmPassword: requiredValidation
};

function RegistrationContainer() {
  const { register, handleSubmit, errors, watch } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

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
    value === watch('password') || (i18next.t('Registration:confirmPasswordError') as string);

  return (
    <form
      className={`column center full-width ${styles.formContainer}`}
      aria-label="registration-form"
      onSubmit={handleSubmit(handleRegister)}
      noValidate
    >
      <div className="column center m-bottom-3">
        <h1 className="m-bottom-1">{i18next.t('Registration:registration')}</h1>
        <h2>{i18next.t('Registration:registrationExplanation')}</h2>
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1 m-right-2`}
          label={i18next.t('Registration:firstName')}
          name={FIELDS.firstName}
          inputType="text"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:firstNamePlaceholder') as string}
          inputRef={register(VALIDATIONS.firstName)}
          error={errors?.firstName?.message}
        />
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={i18next.t('Registration:lastName')}
          name={FIELDS.lastName}
          inputType="text"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:lastNamePlaceholder') as string}
          inputRef={register(VALIDATIONS.lastName)}
          error={errors?.lastName?.message}
        />
      </div>
      <div className={`row ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={i18next.t('Registration:email')}
          name={FIELDS.email}
          inputType="email"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:emailPlaceholder') as string}
          inputRef={register(VALIDATIONS.email)}
          error={errors?.email?.message}
        />
      </div>
      <div className={`row space-between ${styles.sectionContainer}`}>
        <FormInput
          className={`${styles.inputContainer} item-1 m-right-2`}
          label={i18next.t('Registration:password')}
          name={FIELDS.password}
          inputType="password"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:passwordPlaceholder') as string}
          inputRef={register(VALIDATIONS.password)}
          error={errors?.password?.message}
        />
        <FormInput
          className={`${styles.inputContainer} item-1`}
          label={i18next.t('Registration:confirmPassword')}
          name={FIELDS.confirmPassword}
          inputType="password"
          inputClassName={styles.input}
          placeholder={i18next.t('Registration:confirmPasswordPlaceholder') as string}
          inputRef={register({ ...VALIDATIONS.confirmPassword, validate: validateConfirmPassword })}
          error={errors?.confirmPassword?.message}
        />
      </div>
      <div className={`column center ${styles.sectionContainer}`}>
        <button type="submit" className={`full-width m-bottom-1 ${styles.button}`}>
          {i18next.t('RecoverPassword:enter')}
        </button>
        <a href={PATHS.login}>{i18next.t('RecoverPassword:returnToLogin')}</a>
      </div>
    </form>
  );
}

export default RegistrationContainer;
