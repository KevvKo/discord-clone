import React from 'react';
// Components
import { Button, InputGroup, Form } from 'react-bootstrap';
import PrefixDropdown from './prefixesDropdown/PrefixesDropdown';
import FormModal from '../../../../components/modals/FormModal/FormModal';
// Hooks 
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
//Utilities
import { setPhoneNumber } from '../../../../store/slices/userSlice';
import { ADD_PHONE_NUMBER } from '../../../../graphql/user/userMutations';
import { USER_QUERY } from '../../../../graphql/user/userQuery';

function AddPhoneNumber(){

    const [ t ] = useTranslation('common');
    const dispatch = useDispatch();
    const user = useSelector( state => state.user);
    const [ show, setShow ] = useState(false);
    const [ prefix, setPrefix ] = useState('');
    const [ addPhoneNumber ] = useMutation(ADD_PHONE_NUMBER, {
        onCompleted: () => {
            setShow(false);
        },
        onError: (error) => {
            console.error(error.message);
        },
        refetchQueries: [ { query: USER_QUERY }]
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
            dispatch( setPhoneNumber( prefix + phoneNumber.value ));
        }
    };

    let description = user.phoneNumber
        ?  <span>{user.phoneNumber}</span>
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

export default AddPhoneNumber;