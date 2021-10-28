import React from 'react';
import { render, screen, fireEvent, act } from '../../../../../../scripts/utils';
import PrefixDropdown from './PrefixDropdown';
import renderer from 'react-test-renderer';

describe('PrefixDropdown component', () => {
    let component;
    const mockCallback = jest.fn();

    beforeEach(() => {
        component = renderer.create( <PrefixDropdown onSelect={mockCallback}/> );
    });

    it('should render correctly', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
});
