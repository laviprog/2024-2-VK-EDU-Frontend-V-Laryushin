/**
 * Capitalize the first letter and add a period at the end if the input does
 * not already end with one.
 *
 * @param {string} text - text to correct
 * @returns {string} corrected text
 */
export default function correctSentence(text) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}${text.endsWith('.') ? '' : '.'}`;
}
