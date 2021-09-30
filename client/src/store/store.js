import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import userProfileReducer from './slices/userProfileSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        userProfile: userProfileReducer
    }
});