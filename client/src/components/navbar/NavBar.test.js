import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders learn react link', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
