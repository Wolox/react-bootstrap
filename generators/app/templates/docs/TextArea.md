## TextArea

**Props**

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| className | String | | Custom styles to apply to the text area container |
| value | String | ✓ | As this is a controlled component, the input value must be passed to update the component's value |
| onChange | Func | ✓ | Function to be called on text area input change |
| onBlur | Func | | Function to be called on text area input blur |
| onFocus | Func | | Function to be called on text area input focus |

**Usage**

```jsx
<TextArea
  className={styles.textArea}
  value={this.textArea}
  onChange={this.handleChange}
  onFocus={this.handleFocus}
/>
```

If you decided to use redux-form you must add it to the component and use it in this way.

```jsx
textArea = wrapField(TextArea);

<Field
  name={fieldName}
  component={this.textArea}
  className={styles.textArea}
/>
```
