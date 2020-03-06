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
