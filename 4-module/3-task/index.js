/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    let row = table.tBodies[0].rows[i];

    let ageCell = row.cells[1];
    let genderCell = row.cells[2];
    let isDataAvailabe = row.cells[3].getAttribute("data-available");

    row.hidden = (isDataAvailabe === null);

    row.classList.add(isDataAvailabe === "true" ? "available" : "unavailable",
      genderCell.textContent === "f" ? "female" : "male");

    if (ageCell.textContent < 18) {row.style = "text-decoration: line-through";}
  
  }
}

// Функция highlight для каждой строки tr таблицы должна сделать следующее:

// Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status:
// Если её значение true – класс available, если её значение false – класс unavailable.

// Проставить атрибут hidden, если атрибута data-available нет вообще.

// Проставить класс male/female в зависимости от содержимого ячейки Gender:
// Если её значение m – класс male, Если её значение f – класс female.

// Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.