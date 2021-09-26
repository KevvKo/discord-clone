import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
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
        setActive(state, action) {
            const active = action.payload;
            return {
                ...state,
                active: active
            };
        },
        setUsername(state, action) {
            const name = action.payload;
            return {
                ...state,
                uername: name
            };
        },
        setEmail(state, action) {
            const email = action.payload;
            return {
                ...state,
                email: email
            };
        },
        setStatus(state, action) {
            const status = action.payload;
            return {
                ...state,
                status: status
            };
        }

    }
});

export const { 
    setUser, 
    setPhoneNumber,
    setActive,
    setUsername,
    setEmail,
    setStatus
} = userSlice.actions;
export default userSlice.reducer;