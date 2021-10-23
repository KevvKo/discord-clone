import React from 'react';
import GameOverlay from './GameOverlay';
import renderer from 'react-test-renderer';
import '../../scripts/i18n';

describe('GameOverlay', () => {
    let component;

    beforeEach(() => {
        component = renderer
        .create( <GameOverlay />)
    })
    it('renders the component correctly', () => {

        component.toJSON();
        expect(component).toMatchSnapshot();
    });
    it('renders gameo-verlay title correctly', () => {
      expect(component.root.findByType('h3').children[0]).toBe('Game-Overlay');
    });
});
