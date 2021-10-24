import React from 'react';
import Connections from './Connections';
import renderer from 'react-test-renderer';
import '../../scripts/i18n';

describe('Connections', () => {
    let component;

    beforeEach(() => {
        component = renderer
        .create( <Connections />)
    })
    it('renders the component correctly', () => {

        component.toJSON();
        expect(component).toMatchSnapshot();
    });
    it('renders Connections title correctly', () => {
      expect(component.root.findByType('h3').children[0]).toBe('Connection');
    });
});
