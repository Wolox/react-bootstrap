## FormInput

**Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Custom styles to apply to the text area container |
| disabled | Boolean | | `false` | Prevents the user from interacting with the input |
| error | String | | `''` | Messagge error |
| errorClassName | String | | `''` | Custom styles to apply to the messagge error |
| inputClassName | String | | `''`| Custom styles to apply to the input |
| isTextarea | Boolean | | `false` | Indicates if it is an input or textarea |
| inputType | String | ✓ | | Specifies the type |
| label | String `||` Object | | `''` | Specifies Input associated label |
| labelClassName | String | | `''` | Custom styles to apply to the FormInput label |
| name | String | ✓ | | Specifies the name |
| onBlur | Func | | | Function to be called on FormInput blur |
| onChange | Func | ✓ | | Function to be called on FormInput change |
| onFocus | Func | | | Function to be called on FormInput focus |
| placeholder | String | | `''` | Specifies a hint of the expected value |
| readOnly | Boolean | | `false` | Specifies if FormInput is readOnly |
| touched | Boolean | | | Specifies if FormInput has been touched |
| submitCount | Number | | | Specifies number of times user tried to submit the FormInput |


**Usage**

```jsx
<FormInput
  label={t('Login:email')}
  name={FIELDS.email}
  inputType="text"
  inputClassName={styles.inputClassName}
  placeholder={t('Login:emailPlaceholder')}
  onChange={onEmailChange}
  error={error}
/>
```
