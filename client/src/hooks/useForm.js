import { useState } from 'react';

/* hook to handle forms, especially for sing up and login */
const useForm = () => {
    const [ errors, setErrors ] = useState({});
    const [ checked, setChecked ] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    /**
     * 
     * @param {*} form 
     */
    const validateErrors = ( form ) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const passwordNumberRegex = /\d/g;
        const { email, name, password, terms } = form;
        const errorMessages = {};
    
        if(email){
            if( email.value === '' ) errorMessages.email = 'This field is required.';
            else if( !emailRegex.test(email.value) ) errorMessages.email = 'Please enter a valid email.';
        }
        
        if(name){
            if( name.value === '' ) errorMessages.name = 'This field is required.';
            else if( name.value.length < 5 ) errorMessages.name = 'Your username name must be at least containing 5 characters';
        }
        if(password){
            if( password.value === '' ) errorMessages.password = 'This field is required.';
            else if( password.value.length < 10 ) errorMessages.password = 'Your password name must be at least containing 10 characters';
            else if( !passwordNumberRegex.test(password.value) ) errorMessages.password = 'Your password must contain a number';
        }
        if(terms){
            if( !terms.checked ) errorMessages.terms = 'Please confirm our terms and conditions.';
        }
        setErrors(errorMessages);
        return Object.keys(errorMessages).length === 0;
    };

    /**
     * 
     * @param {Event} e 
     */
    const handleTerms = (e) => {
        const checkbox = e.target;
        if(checkbox.name === 'terms') setChecked( !checked );
    };

    /**
     * 
     * @param {Event} e 
     */
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setUser({
            ...user,
            [ name ]: value
        });
    };
    
    return {
        user,
        setUser,
        errors,
        setErrors,
        checked,
        handleChange,
        handleTerms,
        validateErrors
    };
};

export default useForm;