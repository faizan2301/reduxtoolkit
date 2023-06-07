import types from '../types';
import store from '../store';
import {countChange} from '../reducer/counterReducer';
const {dispatch} = store;
export const increment = data => {
  console.log('data', data);
  // dispatch({
  //   type: types.INCREMENT,
  //   payload: data,
  // });
  //   return {
  //     // type:types.INCREMENT,
  //     // payload:data
  //   };
  dispatch(countChange(data));
};
