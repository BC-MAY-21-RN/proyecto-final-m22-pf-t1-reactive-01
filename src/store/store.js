import {configureStore} from '@reduxjs/toolkit';
import petReducer from './slices/pets/petSlice';
import geoLocationReducer from './slices/pets/geoLocation';
export const store = configureStore({
  reducer: {
    petData: petReducer,
    geoLocation: geoLocationReducer,
  },
});
