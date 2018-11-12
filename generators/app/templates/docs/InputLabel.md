## InputLabel

**Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Custom styles to apply to the InputLabel container |
| textClassName | String | | | Custom styles to apply to the label |
| dataFor | String | ✓ | `''` | Specifies which form element a label is bound to |
| label | String | ✓ | | Specifies Input associated label |
| inputClassName | String | | `''`| Custom styles to apply to the input |
| name | String | ✓ | | Specifies the name |
| placeholder | String | | `''` | Specifies a hint of the expected value |
| inputId | String | ✓ | | Specifies the id |
| inputType | String | ✓ | | Specifies the type |
| handleChange | Function | ✓ | | Function to be called on input change |
| disabled | Boolean | | | Prevents the user from interacting with the input |


**Usage**

```jsx
<InputLabel
  className={styles.inputContainer}
  textClassName={styles.inputLabel}
  label="Contraseña"
  dataFor={PASSWORD}
  name={PASSWORD}
  inputId={PASSWORD}
  inputType="text"
  handleChange={handleChange}
/>
````
