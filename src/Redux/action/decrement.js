import types from '../types';
import store from '../store';
const {dispatch} = store;
export const decrement = data => {
  dispatch({
    type: types.DECREMENT,
    payload: data,
  });
  // return{
  //     type:types.DECREMENT,
  //     payload:data
  // }
};
