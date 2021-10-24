import React from 'react';
import AuthorizedApps from './AuthorizedApps';
import renderer from 'react-test-renderer';
import '../../scripts/i18n';

describe('AuthorizdApps', () => {
    let component;

    beforeEach(() => {
        component = renderer
        .create( <AuthorizedApps />)
    })
    it('renders the component correctly', () => {

        component.toJSON();
        expect(component).toMatchSnapshot();
    });
    it('renders AuthorizedApps title correctly', () => {
      expect(component.root.findByType('h3').children[0]).toBe('Authorized Apps');
    });
});
