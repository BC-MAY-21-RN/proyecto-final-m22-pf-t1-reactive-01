import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  lat: -37.972521,
  long: -37.972521,
};
const GeoLocation = createSlice({
  name: 'geoLocation',
  initialState,
  reducers: {
    setLatitud: (state, {payload}) => {
      state.lat = payload;
    },
    setLongitud: (state, {payload}) => {
      state.long = payload;
    },
  },
});
export const {setLatitud, setLongitud} = GeoLocation.actions;
export default GeoLocation.reducer;
