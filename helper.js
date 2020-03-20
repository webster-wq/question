const toString = Object.prototype.toString; 
export const isArray = (it) => toString.call(it) === '[object Array]';
export const isObject = (it) => toString.call(it) === '[object Object]';