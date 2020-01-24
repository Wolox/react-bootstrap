## Field

**Props**

| Property | Type | Required? |
|:---|:---|:---:|
| input | Object | ✓ |

The component passes every other prop to the wrapped component.

**input shape**

| Property | Type | Required? |
|:---|:---|:---:|
| name | String | |
| value | String | |
| onBlur | Func | |
| onChange | Func | |
| onDragStart | Func | |
| onDrop | Func | |
| onFocus | Func | |

**Usage**

```jsx
input = wrapField(Input);

<Field
  name={fieldName}
  type="text"
  component={this.input}
  className={styles.input}
/>
```
