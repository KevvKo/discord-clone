import React from 'react';
import PropTypes from 'prop-types';
import './Select.css';
import { Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Select(props){
    const [t] = useTranslation('common');
    let selectItems;

    if(props.data){
        selectItems = props.data.map((element) => 
            <option key={element} value={element} >{element}</option>
        );
    }

    return(
        <Form.Control name={props.name} className='select' as='select' onChange={props.onChange} custom>
            <option key={-1} >{t('forms.select')}</option>
            {selectItems && selectItems}
        </Form.Control>
    );
}

Select.propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
    name: PropTypes.string
};

export default Select;