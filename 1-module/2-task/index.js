/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  for (let char of name) {
    if (char === " ") {
    	return false;
    };
  }

  if (name.length < 4) {
    return false;
  }

  return true;
}

// *имя не пустое, без пробелов, минимум 4 символа*.

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
