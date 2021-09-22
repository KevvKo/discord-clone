import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:'',
        username: '',
        email: '',
        phoneNumber: '',
        status: false,
        active: true, 
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
                status: user.state,
                active: user.active, 

            };
        },  
        addPhoneNumber: state => {},
        changeActive: state => {},
        changePassword: state => {},
        changeUsername: state => {},
        changeEmail: state => {},
        deleteAccount: state => {},
        setUserStatus: state => {},

    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;