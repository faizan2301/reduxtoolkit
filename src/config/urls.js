'use strict';
export const BASE_URL="https://jsonplaceholder.typicode.com";

export const getApiUrl=(endpoint)=>BASE_URL+endpoint;

export const Posts=getApiUrl('/posts');
export const deleteApi=getApiUrl('/todos/');