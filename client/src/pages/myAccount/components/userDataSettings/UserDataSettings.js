import React from 'react';
import './UserDataSettings.css';
// Components
import EditUserName from '../editUserName/EditUserName';
import EditEmail from '../editEmail/EditEmail';
import AddPhoneNumber from '../addPhoneNumber/AddPhoneNumber';

function UserDataSettings(){   

    return(
        <div className='user-data-settings mx-3 mb-3 p-3'>
            <div className='d-flex mb-4'>
                <EditUserName/>
            </div>
            <div className='d-flex mb-4'>
                <EditEmail />
            </div>
            <div className='d-flex mb-4'>
                <AddPhoneNumber />            
            </div>
        </div>
    );
}

export default UserDataSettings;