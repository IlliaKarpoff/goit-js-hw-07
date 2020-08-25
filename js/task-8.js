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


let amount;
const array = [];
const boxRef = document.querySelector('#boxes')
const inputNumberRef = document.querySelector('#controls>input');
inputNumberRef.placeholder = 'Enter a number';
inputNumberRef.title = 'Enter a number';
const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');

const handleAmount = event => {
    amount = event.target.value;
    array.length = amount;
    console.log('array.length',array.length);
    console.log(array);
}
// const creatorDiv = () => {
    //     const divRef = document.createElement('div');
    //     divRef.classList.add('gallery-item');
    //     boxRef.appendChild(divRef);
    //     return divRef;
//     // return boxRef;
// }
// console.log(creatorDiv());

// const createBoxes = (amount) => {
    //     for (let i = 0; i < amount; i += 1) {
        //         // creatorDiv();
//         boxRef.appendChild(creatorDiv());
//     }
//     return boxRef;
// }

inputNumberRef.addEventListener('change', handleAmount);
// createBtn.addEventListener('click', createBoxes);
// createBtn.addEventListener('click', creatorDiv)
// console.log(amount);

const createGalleryItem = (el) => {
    
    const divRef = document.createElement('div');
    divRef.classList.add('gallery-item', 'flexbox');
    
    return divRef;
}
const galleryItems = array.map(el => createGalleryItem(el));
// console.log(galleryItems);
boxRef.append(...galleryItems);
console.log(boxRef);