import types from '../types';
import store from '../store';
const {dispatch} = store;
export const increment = data => {
  console.log('data', data);
  dispatch({
    type: types.INCREMENT,
    payload: data,
  });
//   return {
//     // type:types.INCREMENT,
//     // payload:data
//   };
};
