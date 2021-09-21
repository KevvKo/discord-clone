import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        addPhoneNumber: state => {},
        changeActive: state => {},
        changePassword: state => {},
        changeUsername: state => {},
        changeEmail: state => {},
        deleteAccount: state => {},
        setUserStatus: state => {},

    }
});