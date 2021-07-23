import { useState } from 'react'

/* hook to handle forms, especially for sing up and login */
const useForm = (initialValues, callback) => {

    const [values, setValues] = useState( initialValues || {})
    
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

    return {
        values,
        handleSubmit,
        handleChange
    }
};

export default useForm;