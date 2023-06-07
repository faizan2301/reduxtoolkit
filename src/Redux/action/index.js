'use strict';
import * as increment from './increment';
import * as decrement from './decrement';
import * as post from './post';
export default {
  ...increment,
  ...decrement,
  ...post,
};
