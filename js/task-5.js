// Завдання 5 +/-
// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), 
// підставляє його поточне значення в span#name-output.                             +
// якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.          -

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
// console.log(inputRef);
// console.log(outputRef);

const nameOutputHandler = event => {
    outputRef.textContent = event.target.value;
}
inputRef.addEventListener('input', nameOutputHandler);