// import types from '../types';
import {createSlice} from '@reduxjs/toolkit';
// let init_state = {
//   num: 0,
// };
// export default function(state = init_state, action) {
//   switch (action.type) {
//     case types.INCREMENT: {
//       let data = action.payload;
//       console.log('reducer', data);
//       return {...state, num: data + 1};
//     }

//     case types.DECREMENT: {
//       let data = action.payload;
//       return {...state, num: data - 1};
//     }

//     default:
//       return {...state};
//   }
// };

const counterSlice = createSlice({
  name: 'num',
  initialState: {
    num:0 
  },
  reducers: {
    countChange: (state, action) => {
      state.num = action.payload;
    },
  },
});
export const {countChange} = counterSlice.actions;
export default counterSlice.reducer;
