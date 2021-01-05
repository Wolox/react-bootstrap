## Testing

This bootstrap uses [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) to test Components.

**Usage**

Run the project tests running the `npm test` command.
This command is defined by Create React App and Jest will look for test files with any of the following popular naming conventions:

* Files with .(js|ts|ts) suffix in \_\_tests__ folders.
* Files with .test.(js|ts|ts) suffix.
* Files with .spec.(js|ts|ts) suffix.

For checking the code coverage of the project run `npm run coverage`.

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
import { render, screen } from '@testing-library/react';

describe('<TextArea />', () => {
  it('should contain a text box', () => {
    render(<TextArea value={testText} onChange={testFunc} />);
    expect(screen.getByRole('textbox')).toBeInDocument();
  });
});
```

This is the output

```
 PASS  src/components/TextArea/index.test.tsx
  <TextArea />
    ✓ should contain a text box (8ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.747s
```
