import React from 'react';
import ActivityStatus from './ActivityStatus';
import renderer from 'react-test-renderer';
import '../../scripts/i18n';

describe('ActivityStatus', () => {
    let component;

    beforeEach(() => {
        component = renderer
        .create( <ActivityStatus />)
    })
    it('renders the component correctly', () => {

        component.toJSON();
        expect(component).toMatchSnapshot();
    });
    it('renders ActivityStatus title correctly', () => {
      expect(component.root.findByType('h3').children[0]).toBe('Activity Status');
    });
});
