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
                color: userProfile.color,
                description: userProfile.description
            };
        },  
        setProfileColor(state, action) {
            const color = action.payload;
            return {
                ...state,
                color: color
            };
        },
        setProfileDescription( state, action ) {
            const description = action.payload;
            return {
                ...state,
                description: description
            };
        }
    }
});

export const { 
    setUserProfile,
    setProfileColor,
    setProfileDescription
} = userProfileSlice.actions;
export default userProfileSlice.reducer;