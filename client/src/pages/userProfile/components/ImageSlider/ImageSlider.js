import React from 'react';
import './ImageSlider.css';
import PropTypes from 'prop-types'; 
// Hooks
import { useTranslation } from 'react-i18next';

function ImageSlider(props){

    const [ t ] = useTranslation('common');

    return(
        <input id='image-slider' type='range'/>
    );
}


ImageSlider.propTypes = {

};

export default ImageSlider;