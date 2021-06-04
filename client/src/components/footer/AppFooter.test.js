import { render, screen } from '@testing-library/react';
import AppFooter from './AppFooter';

test('renders learn react link', () => {
  render(<AppFooter />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
