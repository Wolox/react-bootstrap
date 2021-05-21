import { render, screen } from '@testing-library/react';

import FormInput from '.';

const name = 'aName';
const label = 'aLabel';

test('it renders input text', () => {
  render(<FormInput isTextarea={false} label={label} inputType="text" name={name} />);
  expect(screen.getByLabelText(label)).toHaveAttribute('type', 'text');
});

test('it renders input textarea', () => {
  render(<FormInput isTextarea label={label} inputType="text" name={name} />);
  expect(screen.getByLabelText(label)).toHaveAttribute('type', 'text');
});

test('it renders input number', () => {
  render(<FormInput label={label} inputType="number" name={name} />);
  expect(screen.getByLabelText(label)).toHaveAttribute('type', 'number');
});

test('it shows error', () => {
  const { rerender } = render(
    <FormInput isTextarea={false} inputType="number" name={name} error="anError" touched />
  );
  expect(screen.getByRole('alert')).toBeInTheDocument();

  // render again with submit count
  rerender(
    <FormInput isTextarea={false} inputType="number" name={name} error="anError" touched submitCount={1} />
  );
  expect(screen.getByRole('alert')).toBeInTheDocument();
});
