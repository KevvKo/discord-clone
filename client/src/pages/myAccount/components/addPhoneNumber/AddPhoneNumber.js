import React from 'react';

// Utilities
import PropTypes from 'prop-types';
// Components
import { Button, InputGroup, Form } from 'react-bootstrap';
import PrefixDropdown from './prefixesDropdown/PrefixesDropdown';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery } from '@apollo/client';
//Utilities
import { ADD_PHONE_NUMBER } from '../../../../graphql/mutations';
import { USER_QUERY } from '../../../../graphql/query';
function AddPhoneNumber(){

    const [ t ] = useTranslation('common');
    const [ show, setShow ] = useState(false);
    const [ prefix, setPrefix ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const { data } = useQuery(USER_QUERY); 
    const [ addPhoneNumber ] = useMutation(ADD_PHONE_NUMBER, {
        onCompleted: () => {
            window.location.reload();
        },
        onError: (error) => {
            console.log(error.message);
        }
    });

    const handleShow = () => {
        show
            ? setShow(false)
            : setShow(true);
    };
    
    const handleSelect = (e) => {
        setPrefix(e);
    };
    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const { phoneNumber } = form;
        
        if(phoneNumber){
            addPhoneNumber({
                variables: {
                    phoneNumber: prefix + phoneNumber.value,
                }
            });
        }
    };

    useEffect(() => {
        if(data){
            setPhoneNumber(data.user.phoneNumber);
        }
    }, [ data ]);

    const description = phoneNumber
        ?  <span>{phoneNumber}</span>
        :  <span>{t('settings.main.myAccount.noPhoneNumber')}</span>;

    return(
        <>
            <div>
                <h6>{ t('settings.main.myAccount.phoneNumber') }</h6>
                { description }
            </div>
            <Button onClick={ handleShow } className='ml-auto' variant='secondary'>{t('settings.main.myAccount.add')}</Button>
            <FormModal modalTitle={t('settings.main.myAccount.changePhoneNumber')} show={ show } handleOnHide={ handleShow }>
                <p className='text-center'>
                    {t('settings.main.myAccount.editPhoneDescriptionI')}
                </p>
                <p className='mt-2 text-center'>
                    {t('settings.main.myAccount.editPhoneDescriptionII')}
                </p>
                <Form onSubmit={ handleSubmit }>
                    <InputGroup>
                        <PrefixDropdown onSelect= { handleSelect }/>
                        <Form.Control type='tel' name='phoneNumber' ></Form.Control>
                        <Button variant='primary' type='submit'>  {t('settings.main.myAccount.send')} </Button>
                    </InputGroup>
                </Form>
            </FormModal>
        </>
    );
}

AddPhoneNumber.defaultProps = {
    show: false
};

AddPhoneNumber.propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    show: PropTypes.bool
};
export default AddPhoneNumber;