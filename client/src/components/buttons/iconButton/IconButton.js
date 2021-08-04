import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';
import { Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
function IconButton(props) {

    const iconClassNames = `bi ${props.icon}`;
    let buttonClassNames = '';
    
    props.hover 
        ? buttonClassNames += 'icon-hover-bg'
        : buttonClassNames += 'icon-hover';

    return (
        <OverlayTrigger 
            placement={props.tooltipPlacement}
            overlay={
                <Tooltip>
                    {props.tooltipText}
                </Tooltip>
            }
        >
            <Button className={`icon-button ${props.cssClasses} ${ buttonClassNames}`} variant='flat' size={props.size}>
                <i className={iconClassNames}></i>
            </Button>
        </OverlayTrigger>
    );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    iconSize: '',
    hover: false,
    background: true,
    size: 'md',
    cssClasses: 'p-0',
    tooltipText: '',
    tooltipPlacement: 'top'
};

IconButton.propTypes = {
    icon: PropTypes.string,
    iconSize: PropTypes.string,
    hover: PropTypes.boolean,
    background: PropTypes.boolean,
    size: PropTypes.string,
    cssClasses: PropTypes.string,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.string
};
export default IconButton;

