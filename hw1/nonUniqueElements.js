/**
 * Returns an array of elements which are not unique in the given array.
 *
 * @param {array} data - array of elements to check for uniqueness
 * @returns {array} array of non-unique elements
 */
export default function nonUniqueElements(data) {
  const map = new Map();

  for (const item of data) {
    map.set(item, map.has(item));
  }
  
  return data.filter(item => map.get(item));
}
