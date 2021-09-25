import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:'',
        username: '',
        email: '',
        phoneNumber: '',
        status: Boolean,
        active: Boolean, 
    },
    reducers: {    
        setUser(state, action) { 
            const user = action.payload;
            return {
                ...state,
                id: user.id,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                status: user.status,
                active: user.active, 

            };
        },  
        setPhoneNumber(state, action) {
            const phoneNumber = action.payload;
            return {
                ...state,
                phoneNumber: phoneNumber
            };
        },
        setActive: state => {},
        setPassword: state => {},
        setUsername: state => {},
        setEmail: state => {},
        deleteAccount: state => {},
        setUserStatus: state => {},

    }
});

export const { setUser, setPhoneNumber } = userSlice.actions;
export default userSlice.reducer;