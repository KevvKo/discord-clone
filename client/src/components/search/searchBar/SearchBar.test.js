import React from 'react';
import { render, screen } from '../../../scripts/utils';
import SearchBar from './SearchBar';
import '../../../scripts/i18n';

describe('Channellist component', () => {
    it('should render', () => {
        render( <SearchBar /> );
    });
    it('should render searchfield component with placeholder', () => {
        
        render( <SearchBar /> );
        expect(screen.getByText('Find friends or starting a chat')).toBeTruthy();

    });
});