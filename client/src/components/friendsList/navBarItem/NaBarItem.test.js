import { render, screen } from '@testing-library/react';
import NavBarItem from './NavBarItem';

test('renders learn react link', () => {
  render(<NavBarItem />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
