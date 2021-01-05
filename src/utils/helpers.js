/**
 * Exports a boolean value reporting whether is client side or server side by checking on the window object
 */
export const isClient = typeof window === 'object';

/**
 * Exports a boolean value reporting whether the given API is supported or not
 */
export const isApiSupported = (api) => api in window;
