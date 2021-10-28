/**
 * Convert value into number.
 *
 * @param {String|Number} number
 * @returns {*}
 */

function dateToSerialNumber(date) {
  let r =  25569.0 + ((date.getTime() - (date.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24)); 
  r = Math.round(r * 10000000000) / 10000000000;
  return r;
}

export function toNumber(number) {
  let result;

  if (typeof number === 'number') {
    result = number;

  } else if (typeof number === 'string') {
    result = number.indexOf('.') > -1 ? parseFloat(number) : parseInt(number, 10);
  } else if (number instanceof Date) {
    result = dateToSerialNumber(number);
  }

  return result;
}

/**
 * Invert provided number.
 *
 * @param {Number} number
 * @returns {Number} Returns inverted number.
 */
export function invertNumber(number) {
  return -1 * toNumber(number);
}
