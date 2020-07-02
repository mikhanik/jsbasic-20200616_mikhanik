/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let stringToCheck = str.toLowerCase();

  return ( stringToCheck.includes("1xBet".toLowerCase()) || stringToCheck.includes("XXX".toLowerCase()) );
}
