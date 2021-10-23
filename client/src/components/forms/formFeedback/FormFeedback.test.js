import React from 'react';
import { render, screen, fireEvent } from '../../../scripts/utils';
import FormFeedback from './FormFeedback';
import { Form } from 'react-bootstrap';
import '../../../scripts/i18n';

describe('FormFeedback component', () => {
    it('should render', () => {
        render( 
            <FormFeedback >
                <Form.Control type='text' />
            </FormFeedback> 
        );
    });
    it('should render children component', () => {
        render( 
            <FormFeedback >
                <Form.Control type='text' role='input-field'/>
            </FormFeedback> 
        );
        expect(screen.getByRole('input-field')).toBeTruthy();
    });
    it('should render the given error message', () => {
        const errorMessage = 'xyz';
        render( 
            <FormFeedback error={errorMessage}>
                <Form.Control type='text' role='input-field' />
            </FormFeedback> 
        );
        expect(screen.getByText('xyz').innerHTML).toBe('xyz');
    });
});