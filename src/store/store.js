import {configureStore} from '@reduxjs/toolkit';
import petReducer from './slices/pets/petSlice';
export const store = configureStore({
  reducer: {petData: petReducer},
});
