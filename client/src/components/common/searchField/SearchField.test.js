import { render, screen } from '@testing-library/react';
import SearchField from './SearchField';

test('renders learn react link', () => {
  render(<SearchField />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
