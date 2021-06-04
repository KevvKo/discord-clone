import { render, screen } from '@testing-library/react';
import AppSideBar from './AppSideBar';

test('renders learn react link', () => {
  render(<AppSideBar />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
