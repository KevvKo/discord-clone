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
                <Tooltip data-testid='tooltip'>
                    {props.tooltipText}
                </Tooltip>
            }
        >
            <Button 
                className={`icon-button ${props.cssClasses} ${ buttonClassNames}`} 
                variant='flat' size={props.size} 
                onClick={ props.callback }
                data-testid='icon-button'
            >
                <i className={iconClassNames} data-testid='icon'></i>
            </Button>
        </OverlayTrigger>
    );
}

IconButton.defaultProps = {
    icon: 'bi-person-fill',
    hover: false,
    size: 'md',
    cssClasses: 'p-0',
    tooltipText: '',
    tooltipPlacement: 'top'
};

IconButton.propTypes = {
    callback: PropTypes.func,
    icon: PropTypes.string,
    hover: PropTypes.bool,
    size: PropTypes.string,
    cssClasses: PropTypes.string,
    tooltipText: PropTypes.string,
    tooltipPlacement: PropTypes.string
};
export default IconButton;

