const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const ingredient = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.classList.add('item');
  item.textContent = ingredient;

  return item;
});

const result = list.append(...ingredient);
