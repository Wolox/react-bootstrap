## Testing

This bootstrap uses [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) to test Components.

**Usage**

Run the project tests running the `npm test` command.
This command is defined by Create React App and Jest will look for test files with any of the following popular naming conventions:

* Files with .js suffix in \_\_tests__ folders.
* Files with .test.js suffix.
* Files with .spec.js suffix.

For checking the code coverage of the project run `npm test -- --coverage`.

Refer to CRA tests [documentation](https://facebook.github.io/create-react-app/docs/running-tests) for further explanation.

**Example**

Lets grab the `<TextArea />` component

```jsx
function TextArea({ className, onChange, onBlur, onFocus, value }) {
  return (
    <textarea className={className} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} />
  );
}
```

And create a test for it

```jsx
import { shallow } from 'enzyme';

describe('<TextArea />', () => {
  it('should contain <textArea />', () => {
    const component = shallow(<TextArea value={testText} onChange={testFunc} />);
    expect(component.containsMatchingElement(<textarea />)).toBeTruthy();
  });
});
```

This is the output

```
 PASS  src/app/components/TextArea/index.test.js
  <TextArea />
    ✓ should contain <textArea /> (8ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.747s
```