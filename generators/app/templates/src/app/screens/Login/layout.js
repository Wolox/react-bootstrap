import React from "react";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import { transparent } from "../../../utils/colors";

import Label from "../../components/Label";
import TextInput from "../../components/TextInput";

import { white } from "../../../utils/colors";

import * as Strings from "./strings";
import styles from "./styles";

function Login({ handleSubmit, invalidInput }) {
  return (
    <div style={styles.container}>
      <div style={styles.formElementContainer}>
        <Field
          name="username"
          component={TextInput}
          placeholder={Strings.user}
          textStyles={[styles.formElement]}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </div>
      <div style={styles.formElementContainer}>
        <Field
          name="password"
          component={TextInput}
          placeholder={Strings.password}
          textStyles={[styles.formElement]}
          placeholderTextColor={white}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
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
