## Menu

 **Menu Props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| className | String | | `''` | Styles to apply to the menu container |
| menuItems | PropTypes.arrayOf(menuItemPropTypes) | ✓ | | Specifies the initial items value on mounting |
| currentItemId | Number | ✓ | | Specifies the current item value |
| onHandleClickCompleteActive | Function | ✓ | | Function to be called when click show complete menu | 
| onHandleItemSelected | Function | ✓ | | Function to be called when the item is selected |
| onHandleMouseOut | Function | ✓ | | Function to be called when mouse out of menu container |
| onHandleMouseOver | Function | ✓ | | Function to be called when mouse over of menu container |
| onHandleSubItemSelected | Function | ✓ | | Function to be called when the sub item is selected |
| currentSubItemId | Number | | | Specifies the initial sub item value |
| showComplete | Bool | | | Boolean to set menu width |
| showCompleteActive | Bool | | | Boolean to activate the complete menu mode |

**Menu Item props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| handleItemSelected | Function | ✓ | | Function to be called when the item is selected |
| handleSubItemSelected | Function | ✓ | | Function to be called when the sub item is selected |
| currentSelectedItemId | Number | | | Specifies the current item selected |
| currentSelectedSubItemId | Number | | | Specifies the current sub item selected |
| menuItem | MenuItemPropTypes | | | Specifies thhe menu item |
| showComplete | Boolean | | | Boolean to set menu width |

**Menu Sub Item props**

| Property | Type | Required? | Default | Description |
|:---|:---:|:---:|:---:|:---|
| onSubItemSelected | Function | ✓ | | Function to be called when the sub item is selected |
| className | String | | Custom styles to apply to the search bar container |
| currentSelectedSubItemId | Number | | | Specifies the current sub item selected |
| subItem | SubItemPropTypes | | | Specifies the sub item |
| onMenuItemSelected | Function | ✓ | | Function to be called when the item is selected |
| isActive | Bool | ✓ | | Specifies if the item is active |
| menuItem | MenuItemPropTypes | | | Specifies the menu item |
| showComplete | Bool | | | Boolean to set menu width |


**Usage**

 ```jsx
 const menuItems = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      icOn: iconOn,
      icOff: iconOff,
      subItems: [
        {
          id: 1,
          name: 'Home',
          path: '/home'
        }
      ]
    }
  ];

<Menu menuItems={menuItems} />
```
