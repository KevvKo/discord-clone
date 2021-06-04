import { render, screen } from '@testing-library/react';
import AppHeader from './AppHeader';

test('renders learn react link', () => {
  render(<AppHeader />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
