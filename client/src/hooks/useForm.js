import { useState } from 'react';

/* hook to handle forms, especially for sing up and login */
const useForm = () => {
    const [ errors, setErrors ] = useState({});

    /**
     * 
     * @param {*} form 
     */
    const validateErrors = ( form ) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const passwordNumberRegex = /\d/g;
        const { email, name, password } = form;
        const errorMessages = {};

        if( !email || email.value === '' ) errorMessages.email = 'This field is required.';
        else if( !emailRegex.test(email.value) ) errorMessages.email = 'Please enter a valid email.';
        
        if( !name || name.value === '' ) errorMessages.name = 'This field is required.';
        else if( name.value.length < 5 ) errorMessages.name = 'Your username name must be at least containing 5 characters';

        if( !password || password.value === '' ) errorMessages.password = 'This field is required.';
        else if( password.value.length < 10 ) errorMessages.password = 'Your password name must be at least containing 10 characters';
        else if( !passwordNumberRegex.test(password.value) ) errorMessages.password = 'Your password must contain a number';

        setErrors(errorMessages);
    };

    return {
        errors,
        setErrors,
        validateErrors
    };
};

export default useForm;