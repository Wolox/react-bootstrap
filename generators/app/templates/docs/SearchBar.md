## SearchBar

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