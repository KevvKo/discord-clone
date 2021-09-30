import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {    
        setUser(state, action) { 
            const userProfile = action.payload;
            return {
                ...state,
                id: userProfile.id,
                color: userProfile.name,
            };
        },  
        setColor(state, action) {
            const phoneNumber = action.payload;
            return {
                ...state,
                phoneNumber: phoneNumber
            };
        }
    }
});

export const { 
    setColor
} = userSlice.actions;
export default userSlice.reducer;