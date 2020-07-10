/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arrayStrings = str.split('-');
  
  let camelizedString = arrayStrings.map( (item, index) => {
    if (index === 0) return item;

    return item[0].toUpperCase() + item.slice(1);
  }).join('');

  return camelizedString;
}
