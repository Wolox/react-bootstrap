wolox-react-bootstrap
==================

## Prerequisites

- [React](https://facebook.github.io/react/docs/getting-started.html)

- [Node (minimum version: 6.2.0) and npm](https://github.com/creationix/nvm#install-script)

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


## TL;DR

You don't need to clone this repository. Just follow this steps:

1- Run the following command:

```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/react-bootstrap/development/run.sh) [--verbose]
```

2- Search for TODO commented lines and follow the instructions. (Search "// TODO")

3- Add .env file with your API_BASE_URL

## Components

This are the components you can to choose for your app.
  * SearchBar
  * TextArea
  * Field
  * Spinner

### SearchBar

**Props**

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| textButtonSearch | String | | Text to display inside the submit button |
| className | String | | Custom styles to apply to the search bar container |
| formClassName | String | | Custom styles to apply to the form fields |
| buttonClassName | String | | Custom styles to apply to the submit button |
| children | Node | | Elements to be rendered inside the search bar |
| handleSubmit | Func | ✓ | Function to be called on submit |

**Usage**

```jsx
<SearchBar handleSubmit={this.onSubmit}>
  <label for="name" className={styles.labelSearch}>
    Name:
    <input name="name" id="name" type="input" onChange={this.onChange}/>
  </label>
  <label for="lastName" className={styles.labelSearch}>
    Last Name:
    <input name="lastName" id="lastName" type="input" onChange={this.onChange}/>
  </label>
</SearchBar>
```

If you decided to use redux-form you must add it to the component and use it in this way.

```jsx
<SearchBar
  onSubmit={handleSubmit}
  className={styles.userFormContainer}
  formClassName={styles.userForm}
>
  <div className={styles.search}>
    <Field
      component={Input}
      name="name"
      placeholder={i18next.t('SearchUser:namePlaceholder')}
      type="text"
    />
     <Field
      component={Input}
      name="brand"
      placeholder={i18next.t('SearchUser:brandPlaceholder')}
      type="text"
    />
    <Field
      component={Select}
      name="status"
      dataOptions={STATES}
      placeholder={i18next.t('SearchUser:statusPlaceholder')}
    />
  <div>
</SearchBar
```

### TextArea

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

### Field

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

### Spinner

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

## Base Styles

This boostrap is using https://github.com/Wolox/equalizer reset the default styles of the browser and contains these sources to generalize classes of flex-box, margins and width.
* components.scss
  * full-width
  * half-width
  * quarter-width
* margins.scss
  * m-top-*
  * m-right-*
  * m-bottom-*
  * m-left-*
* layout.scss
  * row / column
    * top
    * middle
    * bottom
    * start
    * center
    * end
    * space-between
    * space-around
    * wrap
    * reverse
    * self-to/middle/bottom/stretch


Use it in this way:

```jsx
<div className="row center middle full-width">
  <Input
    name={fieldName}
    type="text"
    className={`row center m-top-2 ${styles.input}`}
  />
</div>
```

```jsx
className="row center middle full-width"
// Is equals a this:
```
```css
{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
```
