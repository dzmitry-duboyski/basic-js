module.exports = function getSeason(date) {
  const season = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  }

  if (typeof (date) === 'undefined') {
    return 'Unable to determine the time of year!'
  }
  if ((date.getTime()) < 100000000 && (date.getTime()) > -100000000) {
    return 'Error: time is undefined, input correct time'
  }

  let result
  let monthNow = date.getMonth()

  if (monthNow <= 11 && 0 <= monthNow) {
    result = season[monthNow]
  }
  return result
};