import React from 'react';
import PropTypes from 'prop-types';
import { authContext } from '../contexts/authentificationContext';
import useProvideAuth from '../hooks/useProvideAuthentification';


export default function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}

ProvideAuth.propTypes = {
    children: PropTypes.node.isRequired
};