/**
 * Convert value into number.
 *
 * @param {String|Number} number
 * @returns {*}
 */

function dateToSerialNumber(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let excel1900isLeapYear = true;
  if ((year == 1900) && (month <= 2)) {
    excel1900isLeapYear = false;
  }
  let myexcelBaseDate = 2415020;

  if (month > 2) {
    month -= 3;
  } else {
    month += 9;
    --year;
  }

  //    Calculate the Julian Date, then subtract the Excel base date (JD 2415020 = 31-Dec-1899 Giving Excel Date of 0)
  let century = Math.floor(year / 100);
  let decade = year % 100;
  let excelDate = Math.floor((146097 * century) / 4) + Math.floor((1461 * decade) / 4) + Math.floor((153 * month + 2) / 5) + day + 1721119 - myexcelBaseDate + excel1900isLeapYear;

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let excelTime = ((hours * 3600) + (minutes * 60) + seconds) / 86400;

  let result = excelDate + excelTime;

  result = Math.round(r * 10000000000) / 10000000000;

  return result;
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
