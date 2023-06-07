'use strict';
import {Posts, deleteApi} from '../../config/urls';
import {apiDelete, apiGet} from '../../utils/utils';

export const getPost = async () => {
  return apiGet(Posts);
};
export const deletePost = id => {
  var response = apiDelete(deleteApi + `${id}`);
  return response;
};
