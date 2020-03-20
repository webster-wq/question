import { isArray, isObject } from './helper';
/**
 * @param { String } arg
 * @returns { String }
 */
export function formatString(arg) {
  return arg
    .replace(/(\d)/g,  (_, num) => num % 2 === 0 ? '' : num)
    .replace((/(\_[a-z])/g), (_, str) => {
      str = str.replace(/\_/g, '');
      return str.toUpperCase();
  });
}

/**
 * @param {Number} start
 * @param {Number} end
 * @param {Array} ary
 * @returns {Array}
*/
export function fillAry(start, end, ary = []) {
  if (start > end) return ary;
  ary.push(start++);
  return fillAry(start, end, ary);
}

export function compare(arg1, arg2) {
  return internalCompare(arg1, arg2, undefined, undefined)
}

function internalCompare(arg1, arg2, root, parent) {
  if (isArray(arg1) && isArray(arg2)) {
    if (!root) root = arg2;
    parent = arg2;
    for (let i = 0; i < arg2.length; i += 1) {
      if (isArray(arg2[i]) || isObject(arg2[i])) {
        parent = arg2[i];
      }
      let isEqual = internalCompare(arg1[i], arg2[i], root, parent);
      if (isEqual !== true) {
        return isEqual
      }
    }
  } else if (isObject(arg1) && isObject(arg2)) {
    if (!root) root = arg2;
    parent = arg2;
    for (let key in arg2) {
      if (isArray(arg2[key]) || isObject(arg2[key])) {
        parent = arg2[key];
      }
      let isEqual = internalCompare(arg1[key], arg2[key], root, parent);
      if (isEqual !== true) {
        return isEqual
      }
    }
  } else {
    if (arg1 !== arg2) {
      return {
        root: root,
        parent: parent,
        differentValue: arg2
      };
    }
    return arg1 === arg2;
  }
  return true;
}