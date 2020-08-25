// Завдання 7 + (чому працює при пересуванні, проте при кліку запізнюється на 1 клік?)

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text оновлюючи властивість font-size. 
// В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

{/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */}

let fontSize;
const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const handleRange = event => {
    // console.log(event.target.value);
    spanRef.style.fontSize = `${fontSize}px`;
    fontSize = event.target.value;
}
inputRef.addEventListener('input', handleRange);