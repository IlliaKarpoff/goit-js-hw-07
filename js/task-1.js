// Завдання 1. +
// Напиши скрипт, який виконає наступні операції:
// - Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// - Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) 
// і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const categories = document.querySelectorAll('li.item');
console.log(`У списку ${categories.length} категорій:`);

categories.forEach(li => {
    console.log(`Категорія: ${li.firstElementChild.textContent}.
Кількість елементів: ${li.lastElementChild.children.length}`);
});


// console.dir(document.querySelectorAll('h2+ul'));
// const a = document.querySelector('h2+ul').children;
// console.log(a);
// a.forEach(li => {
    // li.classList.add(`${h2.textContent}`);
// });

// document.querySelectorAll('h2').forEach(h2 => { 
//     document.querySelectorAll('h2+ul>li').forEach(li => {
//         li.classList.add(`${h2.textContent[0]}`);    // - почему не работает?
//     });
//     console.log(`Категорія: ${h2.textContent}.
// Кількість елементів: ${document.querySelector('h2+ul').children.length}`);
// });