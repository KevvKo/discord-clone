import { render, screen } from '@testing-library/react';
import FriendsTab from './FriendTab';

test('renders learn react link', () => {
    render(<FriendsTab />);
    const linkElement = screen.getByText(/ xyz /i);
    expect(linkElement).toBeInTheDocument();
});
