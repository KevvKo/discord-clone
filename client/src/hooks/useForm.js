import { useState } from 'react'

/* hook to handle forms, especially for sing up and login */
const useForm = (initialValues, callback) => {

    const [values, setValues] = useState( initialValues || {})
    const [ errors, setErrors ] = useState({});

    const handleSubmit = (event) => {
        const { target } = event;
        if(target) event.preventDefault();
        callback();
    }

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setValues({
            ...values,
            [ name ]: value
        })
    }

    /**
     * 
     * @param {*} form 
     */
    const validateErrors = ( form ) => {
        const regexExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
        
        console.log(form)
    }

    return {
        values,
        validateErrors,
        handleSubmit,
        handleChange
    }
};

export default useForm;