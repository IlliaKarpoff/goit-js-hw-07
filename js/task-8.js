// Завдання 8 - додаткове, виконувати не обов'язково
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити, 
// після чого рендериться колекція. 
// При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount - число. 
// Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
// Кожен створений div:
// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

{/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Створити</button>
  <button type="button" data-action="destroy">Очистити</button>
</div>
<div id="boxes"></div> */}


function generateColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
let amount;
const boxRef = document.querySelector('#boxes');
const inputNumberRef = document.querySelector('#controls>input');
inputNumberRef.placeholder = 'Enter a number';
inputNumberRef.title = 'Enter a number';
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

// варіант 1
const handleAmount = event => {
    amount = Number(event.target.value);
    console.log('amount =',amount);
}
const createBoxes = () => {
    for (let i = 0; i < amount; i += 1) {
        const divRef = document.createElement('div');
        divRef.classList.add('gallery-item', 'flexbox');
        divRef.style.backgroundColor = generateColor();
        divRef.style.width = `${30+i*10}px`;
        divRef.style.height = `${30+i*10}px`;
        boxRef.appendChild(divRef);
        // boxRef.appendChild(createDiv());
    }
    console.log(boxRef);
}
const destroyBoxes = () => {
    for (let i = 0; i < amount; i += 1) {
        document.querySelector('#boxes').lastElementChild.remove()
    }
    console.log(boxRef);
}

inputNumberRef.addEventListener('change', handleAmount);
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);





// // варіант 2
// const array = [];
// const handleAmount = event => {
//     amount = event.target.value;
//     array.length = amount;
//     console.log('array.length',array.length);
//     console.log(array);
// }
// const createDiv = () => {
//     const divRef = document.createElement('div');
//     divRef.classList.add('gallery-item', 'flexbox');
//     return divRef;
// }
// // console.log(createDiv()); // - перевірка = функція createDiv() працює
// // const galleryItems = array.map(() => createDiv()); // - в цьому місці чомусь створюється порожній масив, а не такий як меп
// const createBoxes = (event) => {
//     const galleryItems = array.map(() => createDiv()); // - тут функція createDiv() HE працює
//     console.log('galleryItems',galleryItems);
//     console.log('galleryItems.length',galleryItems.length);
//     boxRef.append(...galleryItems);
//     return console.log(boxRef);
// }
// inputNumberRef.addEventListener('change', handleAmount);
// createBtn.addEventListener('click', createBoxes);
