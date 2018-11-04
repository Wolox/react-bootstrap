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
