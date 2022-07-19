import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/users/userSlice';
import petReducer from './slices/pets/petSlice';
export const store = configureStore({
  reducer: {userinformation: userReducer},
});
