import React from 'react';
import { render } from '../../scripts/utils';
import AppMain from './AppMain';
import '../../scripts/i18n';

describe('AppMain component', () => {
    it('should render', () => {
        render( <AppMain /> );
    });
});