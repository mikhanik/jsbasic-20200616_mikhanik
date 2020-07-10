/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let numbersFromString = str.split(',').join(' ').split(' ')
                         .filter(item => +item)

  return {
          min: Math.min(...numbersFromString),
          max: Math.max(...numbersFromString),
          }
}
