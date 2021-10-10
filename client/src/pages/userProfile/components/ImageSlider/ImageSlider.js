import React from 'react';
import './ImageSlider.css';
import PropTypes from 'prop-types'; 
// Hooks
import { useTranslation } from 'react-i18next';

function ImageSlider(props){

    const [ t ] = useTranslation('common');

    return(
        <input id='image-slider' onChange={ props.onChange } type='range' min={0} max={100} value={ props.value }/>
    );
}


ImageSlider.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

export default ImageSlider;