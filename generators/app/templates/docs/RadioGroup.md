## RadioGroup

 **Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| disabled | Boolean | | `false` | Controls if all the options are disabled |
| className | String | | `''` | Styles to apply to the radio inputs container |
| name | String | ✓ | | If associated to a form, the name is submitted with the control's value as part of the form data. It is passed to every `RadioOption` child |
| children | ReactNode[] | ✓ | | Array of options in the group, which typically would be RadioOption, but it could be any component. The data received from the RadioGroup comes from RadioGroupContext |
| onChange | (event: ChangeEvent<HTMLInputElement>) => void | ✓ | | Function to call on any option selection change |
| initialValue | String | | `''` | Specifies the initial selected value on mounting |

**RadioOption props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| children | ReactNode | | | children which will be rendered after the input and label inside the option |
| className | String | | `''` | Styles to apply to the input and label container |
| inputClassName | String | | `''` | Styles to apply to the input |
| labelClassName | String | | `''` | Styles to apply to the label |
| label | String | | `''` | Input associated label |
| id | String | ✓ | | The value the option will have if selected |
| disabled | Boolean | | `false` | Controls if the option is available to select |

**Usage**

 ```jsx
  <RadioGroup onChange={onChange} initialValue={selectedOption} name="radio-button">
    <RadioOption id="option1" label="Option 1" />
    <RadioOption id="option2" label="Option 2" />
  </RadioGroup>
```
