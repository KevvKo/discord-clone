import { useState } from 'react';
import { useTranslation } from 'react-i18next';


/* hook to handle forms, especially for sing up and login */
const useForm = () => {
    const [ errors, setErrors ] = useState({});
    const [ checked, setChecked ] = useState(false);
    const [ t ] = useTranslation('common');

    /**
     * 
     * @param {*} form 
     */
    const validateErrors = ( form ) => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const passwordNumberRegex = /\d/g;
        const { 
            email, 
            name, 
            password, 
            terms,
            day,
            month,
            year
        } = form;
        const errorMessages = {};
    
        if(email){
            if( email.value === '' ) errorMessages.email = t('error.email.required');
            else if( !emailRegex.test(email.value) ) errorMessages.email = t('error.email.valideEmail');
        }
        
        if(name){
            if( name.value === '' ) errorMessages.name = t('error.name.required');
            else if( name.value.length < 5 ) errorMessages.name = t('error.name.valideName');
        }
        if(password){
            if( password.value === '' ) errorMessages.password = t('error.password.required');
            else if( password.value.length < 9 ) errorMessages.password = t('error.password.validePasswordLength');
            else if( !passwordNumberRegex.test(password.value) ) errorMessages.password = t('error.password.validePasswordNumber');
        }
        if(terms){
            if( !terms.checked ) errorMessages.terms = 'Please confirm our terms and conditions.';
        }
        if(day){
            if( day.value === 'select' ) errorMessages.day = t('error.select.date');
        }
        if(month){
            if( month.value === 'select' ) errorMessages.month = t('error.select.date');
        }
        if(year){
            if( year.value === 'select' ) errorMessages.year = t('error.select.date');
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
    
    return {
        errors,
        setErrors,
        checked,
        handleTerms,
        validateErrors
    };
};

export default useForm;