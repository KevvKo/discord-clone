import { render, screen } from '@testing-library/react';
import UserTag from './UserAvatar';

test('renders learn react link', () => {
  render(<UserTag />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
