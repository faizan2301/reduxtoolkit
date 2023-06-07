// import types from '../types';
import {createSlice} from '@reduxjs/toolkit';
// let init_state = {
//   userData: null,
// };
// export default function (state = init_state, action) {
//   switch (action.type) {
//     case types.LOGIN: {
//       let data = action.payload;
//       console.log('reducer', data);
//       return {...state, userData: data };
//     }

//     case types.SIGNUP: {
//       let data = action.payload;
//       return {...state, userData: data};
//     }

//     default:
//       return {...state};
//   }
// };
const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const {saveUserData} = authSlice.actions;
export default authSlice.reducer;
