## Checkbox

**Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Custom styles to apply to the checkbox container |
| inputClassName | String | | `''` | Custom styles to apply to the checkbox input |
| labelClassName | String | | `''` | Custom styles to apply to the checkbox associated label |
| label | String | | | Checkbox associated label |
| name | String | | | If associated to a form, the control name is submitted with the control's value as part of the form data |
| disabled | Boolean | | | Prevents the user from interacting with the input |
| required | Boolean | | | If associated to a form, it specifies if the user must fill in a value before submitting |
| onChange | Func | | | Function to be called on toggle |
| isChecked | Boolean | | `false` | Specifies if the checkbox is checked or not when mounting |

**Usage**

```jsx
<Checkbox
  className={styles.checkbox}
  labelClassName={styles.checkboxLabel}
  label="Acepto términos y condiciones"
  onChange={handleChange}
/>
```
