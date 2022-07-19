import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  owner: '',
  firstname: '',
  lastname: '',
  typePet: '',
  breed: '',
  age: '',
  gender: '',
  color: '',
  img: '',
};
const PetSlice = createSlice({
  name: 'petData',
  initialState,
  reducers: {
    setowner: (state, {payload}) => {
      state.owner = payload;
    },
    setfirstname: (state, {payload}) => {
      state.firstname = payload;
    },
    setlastname: (state, {payload}) => {
      state.lastname = payload;
    },
    settypePet: (state, {payload}) => {
      state.typePet = payload;
    },
    setbreed: (state, {payload}) => {
      state.breed = payload;
    },
    setage: (state, {payload}) => {
      state.age = payload;
    },
    setgender: (state, {payload}) => {
      state.gender = payload;
    },
    setcolor: (state, {payload}) => {
      state.color = payload;
    },
    setimg: (state, {payload}) => {
      state.img = payload;
    },
  },
});

export const {
  setowner,
  setlastname,
  setfirstname,
  setage,
  setbreed,
  setcolor,
  setgender,
  setimg,
  settypePet,
} = PetSlice.actions;
export default PetSlice.reducer;
