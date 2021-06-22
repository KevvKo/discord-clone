import { render, screen } from '@testing-library/react';
import Home from './Login';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
