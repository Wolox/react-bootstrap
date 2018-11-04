## Spinner

**Props**

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| WrappedComponent | Node | | Component to be wrapped by the spinner |
| classNameContainer | String | | Custom style to apply to the spinner container |
| classNameLoading | String | | Custom styles to apply to the spinner when loading |
| typeLoading | one of `TYPE_SPINNER` | | Spinner variants, `TYPE_SPINNER = ['three-bounce','circle','double-bounce','ball-clip-rotate','wandering-cubes','chasing-dots','cube-grid','wordpress','folding-cube','ball-triangle-path','ball-pulse-sync']` |
| colorSpinner | String | | The spinner color. It can be either a hex value or a color word |

**Usage**

```jsx
//Import into the component to be used.
import { withSpinner } from '../Spinner';

//Include in the definition of the component to be used. In this case is SearchBar.
export default withSpinner({
  type: 'double-bounce',
  classNameContainer: styles.spinnerContainer,
  classNameLoading: styles.spinner
});
```

Check every spinner variant here http://kyleamathews.github.io/react-spinkit/
