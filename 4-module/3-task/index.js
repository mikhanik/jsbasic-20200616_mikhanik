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
