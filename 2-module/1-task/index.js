/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let salariesSum = 0;

  for (const key in salaries) {
    if (+salaries[key]) salariesSum += salaries[key];
  }

  return salariesSum;
}
