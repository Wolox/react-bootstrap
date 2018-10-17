### RadioGroup

 **Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the radio inputs container |
| selectedValue | String | | | |
| name | String | | | |
| disabled | Boolean | | `false` | Controls if all the options are disabled |
| onChange | Func | | | Function to call on any option selection |

`RadioGroup.option` uses `RadioOption` component to render each radio input

**RadioOption props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the input and label container |
| inputClassName | String | | `''` | Styles to apply to the input |
| labelClassName | String | | `''` | Styles to apply to the label |
| label | String | | | |
| value | String | ✓ | | The respective value to be submitted |
| disabled | Boolean | | `false` | Controls if the option available to select |

**Usage**

 ```jsx
<RadioGroup name="movies" onChange={() => console.log('clicked')}>
  <RadioGroup.option label="Antman" value="antman" />
  <RadioGroup.option label="Watchmen" value="watchmen" />
  <RadioGroup.option label="Deadpool" value="deadpool" />
</RadioGroup>
```
