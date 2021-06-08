import { render, screen } from '@testing-library/react';
import ChannelTab from './ChannelTab';

test('renders learn react link', () => {
  render(<ChannelTab />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
