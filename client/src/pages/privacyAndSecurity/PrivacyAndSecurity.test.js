import React from 'react';
import PrivacyAndSecurity from './PrivacyAndSecurity';
import renderer from 'react-test-renderer';
import '../../scripts/i18n';

describe('PrivacyAndSecurity', () => {
    let component;

    beforeEach(() => {
        component = renderer
        .create( <PrivacyAndSecurity />)
    })
    it('renders the component correctly', () => {

        component.toJSON();
        expect(component).toMatchSnapshot();
    });
    it('renders PrivacyAndSecurity title correctly', () => {
      expect(component.root.findByType('h3').children[0]).toBe('Privacy and Security');
    });
});
