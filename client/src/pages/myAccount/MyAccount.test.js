import React from 'react';
import MyAccount from './MyAccount';
import '../../scripts/i18n';
import { Provider } from 'react-redux';
import { render, screen, act } from '../../scripts/utils';


describe('MyAccount', () => {


    beforeEach(() => {

        render( <MyAccount /> );
    });
    it('renders the component correctly', () => {


    });
    it('renders MyAccount titles correctly', () => {
    });
});
