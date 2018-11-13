## RadioGroup

 **Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the radio inputs container |
| selectedValue | String | | | Specifies the initial selected value on mounting |
| name | String | | | If associated to a form, the name is submitted with the control's value as part of the form data. It is passed to every `RadioOption` child |
| disabled | Boolean | | `false` | Controls if all the options are disabled |
| onChange | Func | | | Function to call on any option selection change |

`RadioGroup.option` uses `RadioOption` component to render each radio input

**RadioOption props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the input and label container |
| inputClassName | String | | `''` | Styles to apply to the input |
| labelClassName | String | | `''` | Styles to apply to the label |
| label | String | | `''` | Input associated label |
| value | String | ✓ | | The respective value to be submitted |
| disabled | Boolean | | `false` | Controls if the option is available to select |

**Usage**

 ```jsx
<RadioGroup name="movies" onChange={() => console.log('clicked')}>
  <RadioGroup.option label="Antman" value="antman" />
  <RadioGroup.option label="Watchmen" value="watchmen" />
  <RadioGroup.option label="Deadpool" value="deadpool" />
</RadioGroup>
```
