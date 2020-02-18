## Checkbox

**Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| checked | Boolean | Yes | | Specifies if the checkbox is checked or not |
| className | String | No | `''` | Custom styles to apply to the checkbox container |
| disabled | Boolean | | | Prevents the user from interacting with the input |
| error | String | No | `''` | Message error label |
| errorClassName | String | No | `''` | Custom style to apply to the message error label |
| inputClassName | String | No | `''` | Custom styles to apply to the checkbox input |
| label | String | No | `''` | Checkbox associated label |
| labelClassName | String | No | `''` | Custom styles to apply to the checkbox associated label |
| name | String | Yes | | If associated to a form, the control name is submitted with the control's value as part of the form data |
| onChange | Func | Yes | | Function to be called on toggle |
| required | Boolean | No | False | If associated to a form, it specifies if the user must fill in a value before submitting |


**Usage**

```jsx
<Checkbox
  checked={isChecked}
  name="checkbox"
  onChange={handleChange}
  label="Acepto términos y condiciones"
  labelClassName={styles.checkboxLabel}
/>
```
