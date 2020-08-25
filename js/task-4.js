// Завдання 4 -
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}

let counterValue = 10;
const btnDecr = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');
const btnIncr = document.querySelector('button[data-action="increment"]');

const decrement = counterValue => {
    console.log('click!');
    counterValue -= 1;
    value.textContent = counterValue;
    return counterValue;
}
const increment = counterValue => {
    console.log('click!');
    counterValue += 1;
    value.textContent = counterValue;
    return console.log(counterValue);
}

btnDecr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);// - не работает!
// value.textContent = counterValue;
