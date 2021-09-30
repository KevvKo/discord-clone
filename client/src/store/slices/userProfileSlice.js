import { createSlice } from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {},
    reducers: {    
        setUserProfile(state, action) { 
            const userProfile = action.payload;
            return {
                ...state,
                userId: userProfile.id,
                color: userProfile.name,
            };
        },  
        setColor(state, action) {
            const color = action.payload;
            return {
                ...state,
                color: color
            };
        }
    }
});

export const { 
    setColor
} = userProfileSlice.actions;
export default userProfileSlice.reducer;