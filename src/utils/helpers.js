import axios from 'axios';

/**
 * Exports a boolean value reporting whether is client side or server side by checking on the window object
 */
export const isClient = typeof window === 'object';

/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
export const isApiSupported = (api) => api in window;

/**
 * Exports a function to set jwt token to exios defult headers
 */
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
