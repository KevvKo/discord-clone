import { render, screen } from '@testing-library/react';
import IconButton from './IconButton';

test('renders learn react link', () => {
  render(<IconButton />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
