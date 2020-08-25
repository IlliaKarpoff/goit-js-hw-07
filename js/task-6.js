// Завдання 6 +
// Напиши скрипт, який би при втраті фокуса на інпут, 
// перевіряв його вміст на правильну кількість символів.

// <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символів"/>

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   
// якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

// #validation-input {border: 3px solid #bdbdbd;}
// #validation-input.valid {border-color: #4caf50;}
// #validation-input.invalid {border-color: #f44336;}

const inputRef = document.querySelector('#validation-input');
// console.log('inputRef =', inputRef);
// console.log('data-length =', Number(inputRef.getAttribute('data-length')));
const blurHandler = event => {
    // console.log('event.target.value.length =',event.target.value.length);
    event.target.value.length === Number(inputRef.getAttribute('data-length')) ? 
    inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid') :
    inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid');

    // (inputRef.classList.add('valid') && inputRef.classList.remove('invalid')) :
    // (inputRef.classList.add('invalid') && inputRef.classList.remove('valid')) ; // - почему не работает?
}
inputRef.addEventListener('blur', blurHandler)