import { render, screen } from '@testing-library/react';
import Select from './Select';

test('renders learn react link', () => {
  render(<Select />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
