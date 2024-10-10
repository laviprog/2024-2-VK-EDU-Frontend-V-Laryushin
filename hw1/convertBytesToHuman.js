
/**
 * Converts bytes to human-readable format.
 *
 * @param {number} bytes - size in bytes
 * @throws {TypeError} if bytes is not typeof number
 * @throws {RangeError} if bytes is negative
 * @returns {string} human-readable string
 */
export default function convertBytesToHuman(bytes) {
  
  if (typeof bytes !== 'number' || !isFinite(bytes)) {
    throw new TypeError('Expected a valid number');
  }

  if (bytes < 0) {
    throw new RangeError('Bytes cannot be negative');
  }

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let index = 0;

  while (bytes >= 1024 && index < units.length - 1) {
    bytes /= 1024;
    index++;
  }

  return `${bytes % 1 === 0 ? bytes : bytes.toFixed(2)} ${units[index]}`;
}
