import { render, screen } from '@testing-library/react';
import FormFeedback from './FormFeedback';

test('renders learn react link', () => {
  render(<FormFeedback />);
  const linkElement = screen.getByText(/ xyz /i);
  expect(linkElement).toBeInTheDocument();
});
