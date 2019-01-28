import { deepFreeze } from './object';

/**
 * Receives an array of strings, and returns an obj with that strings as properties with that string as value.
 * E.G:
 * stringArrayToObject(['A', 'B', 'C']) // { A: 'A', B: 'B', C: 'C' }
 * @param {array} actionsArray array of values
 * @param {string} namespace prefix for the resulting values
 * @returns {object} (['A', 'B', 'C', 'name']) -> { A: '@name/A', B: '@name/B', C: '@name/C' }
 */
export function stringArrayToObject(actionsArray, namespace = '') {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }

  return deepFreeze(
    actionsArray.reduce(
      (acc, name) => ({ ...acc, [name]: `${namespace ? `${namespace}:${name}` : name}` }),
      {}
    )
  );
}

/**
 * Receives a length, and returns a new Array with indices on each position.
 * E. G:
 * arrayOfIndices(3) // [0, 1, 2]
 * This is for a reason: avoiding the use of for loops.
 * @param {number} length length of the array
 * @returns {array} [0, ..., length]
 *
 * @see https://github.com/airbnb/javascript#iterators--nope
 */
export function arrayOfIndices(length) {
  // .fill(<something not undefined>) is required for map, map ignore undefined indexes
  return Array(length)
    .fill(null)
    .map((_, index) => index);
}
