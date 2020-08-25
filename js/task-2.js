// Завдання 2 +
// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.  
// Для створення DOM-вузлів використовуй document.createElement().

const ulRef = document.querySelector('#ingredients');

const createLi = ingredient => {
    const liRef = document.createElement('li');
    liRef.textContent = ingredient;
    return liRef;
};

const arrLi = ingredients.map(ingredient => createLi(ingredient));
// console.log(arrLi);
ulRef.append(...arrLi);
console.log(ulRef);