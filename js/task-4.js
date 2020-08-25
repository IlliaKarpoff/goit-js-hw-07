// Завдання 4 +
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}

const value = document.querySelector('#value');
let counterValue = Number(value.textContent);
const btnDecr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}
const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

btnDecr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);