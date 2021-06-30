import { render, screen } from '@testing-library/react';
import FilterBar from './FilterBar';

test('renders learn react link', () => {
  render(<FilterBar />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
