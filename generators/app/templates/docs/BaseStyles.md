## Base Styles

This boostrap is using https://github.com/Wolox/equalizer reset the default styles of the browser and contains these sources to generalize classes of flex-box, margins and width.

| Source | Class | Equals
|:---|:---|:---:|
| components.scss | full-width | ``` width: 100% ``` |
| | half-width | ``` width: 50% ``` |
| | quarter-width | ``` width: 25% ```|
| | | |
| margins.scss | | scale: 10px |
| | m-top-x | ``` margin-top: {x * scale}px ```|
| | m-right-x | ``` margin-right: {x * scale}px ```|
| | m-bottom-x | ``` margin-bottom: {x * scale}px ```|
| | m-left-x | ``` margin-left: {x * scale}px ```|
| | | |
| layout.scss| | |
| | column | ``` display: flex flex-direction: column ```|
| | column top | ``` justify-content: flex-start ```|
| | column middle | ``` justify-content: center ```|
| | column bottom | ``` justify-content: flex-end ```|
| | colum start | ``` align-items: flex-start ```|
| | colum center | ``` align-items: center ```|
| | colum end | ``` align-items: end ```|
| | colum stretch | ``` align-items: stretch ```|
| | column self-start | ``` align-self: flex-start ```|
| | column self-center | ``` align-self: center ```|
| | column self-end | ``` align-self: flex-end ```|
| | row | ``` display: flex flex-direction: row ```|
| | row top | ``` align-items: flex-start ```|
| | row middle | ``` align-items: center ```|
| | row bottom | ``` align-items: flex-end ```|
| | row start | ``` justify-content: flex-start ```|
| | row center | ``` justify-content: center ```|
| | row end | ``` justify-content: flex-end ```|
| | row wrap | ``` flex-wrap: wrap ```|
| | row reverse | ``` flex-direction: row-reverse ```|
| | row self-top | ``` align-self: flex-start ```|
| | row self-middle | ``` align-self: center ```|
| | row self-bottom | ``` align-self: flex-end ```|
| | row self-stretch | ``` align-self: self-stretch ```|
| | space-between | ``` justify-content: space-between ```|
| | space-around | ``` justify-content: space-around ```|



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
// Is equal to this:
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
