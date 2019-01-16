## Menu

 **Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the menu container |
| menuItems | PropTypes.arrayOf(menuItemPropTypes) | ✓ | | Specifies the initial items value on mounting |
| currentItemId | Number | ✓ | | Specifies the current item value |
| onHandleClickCompleteActive | Function | ✓ | | Specifies the action when click show complete menu | 
| onHandleItemSelected | Function | ✓ | | Specifies the action when the item is selected |
| onHandleMouseOut | Function | ✓ | | Specifies the action when mouse out of menu container |
| onHandleMouseOver | Function | ✓ | | Specifies the action when mouse over of menu container |
| onHandleSubItemSelected | Function | ✓ | | Specifies the action when the sub item is selected |
| currentSubItemId | Number | | | Specifies the initial sub item value |
| showComplete | Bool | | | Boolean to activate the complete menu mode |
| showCompleteActive | Bool | | | Boolean to set menu width |

**Menu props**

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
