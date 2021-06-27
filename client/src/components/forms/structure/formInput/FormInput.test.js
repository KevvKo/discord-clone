import { render, screen } from '@testing-library/react';
import FormInput from './FormInput';

test('renders learn react link', () => {
  render(<FormInput />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
