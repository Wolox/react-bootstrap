import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import i18next from 'i18next';

import { useLazyRequest } from '~app/hooks/useRequest';
import { signUp } from '~services/AuthServices';
import { UserData } from '~contexts/UserContext/reducer';

import FormStep from './components/FormStep';
import { steps, formFields } from './constants';
import { validate } from './validations';
import styles from './styles.module.scss';

function RegistrationContainer() {
  const history = useHistory();
  const [currentStep, setStep] = useState(0);

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setStep(currentStep - 1);
    }
  };

  const [, , signUpError, signUpRequest] = useLazyRequest({
    request: signUp,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    withPostSuccess: response => {
      history.push('/');
    }
  });

  const handleFormSubmit = (values: UserData) => {
    signUpRequest(values);
  };

  const formik = useFormik({
    initialValues: formFields.reduce((acum: any, field: string) => ({ ...acum, [field]: '' }), {}),
    onSubmit: handleFormSubmit,
    validate
  });

  const { handleChange, handleSubmit, values, errors, isValid } = formik;
  const { id, name, fields } = steps[currentStep];

  const errorMessage = signUpError?.errorData?.message;

  return (
    <form className={`column center ${styles.formContainer}`} onSubmit={handleSubmit}>
      <h1 className="m-bottom-4">{i18next.t('Registration:registration')}</h1>
      <h2 className="m-bottom-5">{i18next.t('Registration:registrationDescription')}</h2>
      <FormStep
        className="m-bottom-5"
        id={id}
        name={name}
        fields={fields}
        values={values}
        handleChange={handleChange}
        errors={errors}
      />
      <div className={`row space-between full-width ${styles.formButtons}`}>
        <button className={styles.button} type="button" onClick={handlePrevStep} disabled={currentStep === 0}>
          {i18next.t('Registration:previous')}
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={handleNextStep}
          disabled={currentStep === steps.length - 1}
        >
          {i18next.t('Registration:next')}
        </button>
        {currentStep === steps.length - 1 && (
          <button className={styles.button} type="submit" disabled={!isValid}>
            {i18next.t('Registration:submit')}
          </button>
        )}
      </div>
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
}

export default RegistrationContainer;
