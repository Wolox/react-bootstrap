import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import { transparent } from "../../../utils/colors";
import Label from "../../components/Label";
import TextInput from "../../components/TextInput";
import InputValidations from "../../../utils/inputValidations";
import { white } from "../../../utils/colors";

import * as Strings from "./strings";
import styles from "./styles";

const userValidations = [
  InputValidations.required(`El ${Strings.user} es requerido`),
  InputValidations.minLength(7, Strings.userMinLength),
  InputValidations.maxLength(11, Strings.userMaxLength),
  InputValidations.numericalDigits(Strings.userFormat)
];

const passwordValidations = [
  InputValidations.required(`El ${Strings.password} es requerido`),
  InputValidations.minLength(8, Strings.passwordMinLength),
  InputValidations.maxLength(255, Strings.passwordMaxLength)
];

function Login({ handleSubmit, invalidInput }) {
  return (
    <div style={styles.container}>
      <div style={styles.formElementContainer}>
        <Field
          name="username"
          component={TextInput}
          placeholder={Strings.user}
          shouldDisplayDescription
          type="text"
          validate={userValidations}
        />
      </div>
      <div style={styles.formElementContainer}>
        <Field
          name="password"
          component={TextInput}
          placeholder={Strings.password}
          type="password"
          shouldDisplayDescription
          validate={passwordValidations}
        />
      </div>
      <Label bold transparent={!invalidInput} red={invalidInput}>
        {Strings.validationMessage}
      </Label>
      <Button onPress={handleSubmit} style={styles.formButton}>
        <Label white style={styles.loginStyle}>
          {Strings.forgotPassword}
        </Label>
      </Button>
      <div style={styles.submitButtons}>
        <Button navyBlue big style={styles.submitButton} onPress={handleSubmit}>
          {Strings.submit}
        </Button>
        <Button navyBlue big style={styles.submitButton} onPress={handleSubmit}>
          {Strings.signUp}
        </Button>
      </div>
    </div>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalidInput: PropTypes.bool.isRequired
};

export default reduxForm({
  form: Strings.formName,
  initialValues: { username: "", password: "" }
})(Login);
